"use client";

export default function Error({ error, reset }: any) {
  return <button onClick={reset}>Retry</button>;
}
