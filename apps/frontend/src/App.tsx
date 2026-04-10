const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api';

export function App() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>Application interne - Prototype v2</h1>
      <p>Architecture React + Vite / Node + Express / PostgreSQL + Prisma.</p>
      <p>
        API backend attendue sur: <code>{apiBaseUrl}</code>
      </p>
    </main>
  );
}
