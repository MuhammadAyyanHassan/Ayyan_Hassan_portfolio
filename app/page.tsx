export default function Home() {
  return (
    <main style={{
      backgroundColor: '#F7F5F2',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      color: '#171717',
    }}>
      <div style={{
        borderLeft: '2px solid #6B1F2A',
        paddingLeft: '16px',
      }}>
        <h1 style={{ fontSize: '48px', margin: 0, fontWeight: 500 }}>AH</h1>
        <p style={{ margin: '8px 0 0', fontSize: '16px' }}>Muhammad Ayyan Hassan</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#888' }}>Portfolio — coming together deliberately.</p>
      </div>
    </main>
  );
}
