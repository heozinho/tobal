export default function NewsFeed({ headlines }: { headlines: string[] }) {
  return (
    <div className="card" style={{ height: '100%', backgroundColor: '#f4f1ea', color: '#1a1a1a' }}>
      <div style={{ 
        borderBottom: '4px solid #1a1a1a', 
        paddingBottom: '8px', 
        marginBottom: '16px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontFamily: 'serif', 
          fontSize: '2.5rem', 
          margin: 0, 
          textTransform: 'uppercase',
          letterSpacing: '-1px',
          color: '#1a1a1a'
        }}>
          The Global Times
        </h2>
        <div style={{ 
          fontSize: '0.8rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          borderTop: '1px solid #1a1a1a', 
          borderBottom: '1px solid #1a1a1a',
          padding: '4px 0',
          marginTop: '8px',
          fontFamily: 'sans-serif'
        }}>
          <span>Vol. CXCIV No. 56</span>
          <span>Monday, Jan 1, 2000</span>
          <span>Price $1.50</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        {headlines.length === 0 ? (
          <p style={{ fontStyle: 'italic', color: '#555', textAlign: 'center' }}>No breaking news to report...</p>
        ) : (
          headlines.map((headline, i) => (
            <div key={i} className="animate-fade-in" style={{ 
              borderBottom: i !== headlines.length - 1 ? '1px dashed #ccc' : 'none', 
              paddingBottom: i !== headlines.length - 1 ? 'var(--spacing-md)' : 0 
            }}>
              <h3 style={{ 
                fontFamily: 'serif', 
                fontSize: i === 0 ? '1.8rem' : '1.3rem', 
                fontWeight: i === 0 ? 800 : 700,
                lineHeight: 1.1,
                marginBottom: '8px',
                color: '#1a1a1a'
              }}>
                {headline}
              </h3>
              {i === 0 && (
                <p style={{ fontFamily: 'serif', fontSize: '0.95rem', color: '#333' }}>
                  A sweeping new directive was enacted today by the leadership, prompting mixed reactions 
                  across the political spectrum. Analysts expect immediate economic repercussions as the 
                  markets react to the sudden shift in policy...
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
