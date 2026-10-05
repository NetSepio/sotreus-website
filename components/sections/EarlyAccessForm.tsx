'use client';

import { useState, type FormEvent } from 'react';
import styles from './EarlyAccessForm.module.css';

// [FORM ENDPOINT]: privacy-respecting provider with double opt-in and no tracking pixels.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || undefined;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot filled: quietly pretend it worked.
    if (data.get('company')) {
      setStatus('success');
      return;
    }
    if (!endpoint) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className={styles.joined}>
        <span className={styles.joinedDot} aria-hidden="true" />
        You’re on the list. We’ll write when early access opens.
      </div>
    );
  }

  return (
    <form action={endpoint} method="post" onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        EMAIL
      </label>
      <div className={styles.row}>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@domain.com"
          className={styles.input}
          aria-describedby="email-note"
        />
        <button
          type="submit"
          className={`btn-primary ${styles.submit}`}
          disabled={status === 'submitting'}
        >
          Get early access
        </button>
      </div>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === 'error' && (
        <p role="alert" className={styles.error}>
          That didn’t go through. Try again in a moment.
        </p>
      )}
      <span id="email-note" className={styles.note}>
        One email when access opens. No tracking pixels. Unsubscribe anytime.
      </span>
    </form>
  );
}
