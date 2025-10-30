export const metadata = {
  title: 'Amazon (Simplified)',
  description: 'A simplified Amazon-like homepage mock',
};

import ProductQuickInfo from '@/app/amazon/ProductQuickInfo';

const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'Wireless Headphones with Noise Cancellation',
    price: 129.99,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1518441902113-c1d3c4d0b692?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Smartwatch with Heart Rate Monitor',
    price: 89.0,
    rating: 4.2,
    img: 'https://images.unsplash.com/photo-1549921296-3a6b3d8b6c77?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Mechanical Keyboard (RGB, Blue Switches)',
    price: 69.99,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: '4K Action Camera with Waterproof Case',
    price: 149.99,
    rating: 4.1,
    img: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2fb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Portable Bluetooth Speaker',
    price: 39.99,
    rating: 4.3,
    img: 'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'USB-C Hub (8-in-1)',
    price: 29.99,
    rating: 4.0,
    img: 'https://images.unsplash.com/photo-1581547840320-9fb5211d6d5a?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Page() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr auto',
        background: '#e3e6e6',
        color: '#111',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#131921',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: 12,
            padding: '8px 12px',
            maxWidth: 1280,
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              aria-hidden
              style={{ width: 28, height: 18, background: '#FF9900', borderRadius: 2 }}
            />
            <strong style={{ fontSize: 20 }}>amazon</strong>
          </div>
          <form style={{ display: 'flex', height: 38 }} action="#">
            <input
              placeholder="Search"
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '0 12px',
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
              }}
            />
            <button
              type="button"
              style={{
                border: 'none',
                padding: '0 14px',
                background: '#febd69',
                color: '#111',
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              Search
            </button>
          </form>
          <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
            <span style={{ opacity: 0.95 }}>Hello, sign in</span>
            <span style={{ opacity: 0.95 }}>Returns & Orders</span>
            <span style={{ opacity: 0.95 }}>Cart</span>
          </div>
        </div>
        <nav
          style={{
            background: '#232f3e',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '8px 12px', display: 'flex', gap: 16, fontSize: 14 }}>
            <span>All</span>
            <span>Today's Deals</span>
            <span>Customer Service</span>
            <span>Registry</span>
            <span>Gift Cards</span>
            <span>Sell</span>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <section style={{ position: 'relative' }}>
        <div
          aria-hidden
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 280,
            filter: 'saturate(1.05)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 1280,
            padding: '0 12px',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(227,230,230,0.95), rgba(227,230,230,0.8))',
              borderRadius: 4,
              padding: '10px 12px',
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            You are on a simplified demo. Browse featured items below.
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 12px' }}>
        <h2 style={{ fontSize: 20, margin: '8px 0 12px' }}>Featured products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 16,
          }}
        >
          {MOCK_PRODUCTS.map((p) => (
            <article
              key={p.id}
              style={{
                display: 'grid',
                gridTemplateRows: 'auto auto 1fr auto',
                background: '#fff',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ aspectRatio: '4 / 3', background: '#f7f7f7' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '10px 12px', display: 'grid', gap: 6 }}>
                <h3 style={{ fontSize: 15, lineHeight: 1.3 }}>{p.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                  <span style={{ color: '#B12704', fontWeight: 700 }}>${p.price.toFixed(2)}</span>
                  <span aria-hidden>·</span>
                  <span>{'★'.repeat(Math.round(p.rating))}{'☆'.repeat(5 - Math.round(p.rating))}</span>
                </div>
              </div>
              <div style={{ padding: '0 12px 12px' }}>
                <button
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    background: '#ffd814',
                    border: '1px solid #fcd200',
                    borderRadius: 20,
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  Add to Cart
                </button>
                <ProductQuickInfo product={p} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 'auto' }}>
        <div style={{ background: '#232f3e', color: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 12px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <div>
              <strong>Get to Know Us</strong>
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'grid', gap: 6, fontSize: 14 }}>
                <li>Careers</li>
                <li>Blog</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <strong>Make Money with Us</strong>
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'grid', gap: 6, fontSize: 14 }}>
                <li>Sell products</li>
                <li>Affiliate program</li>
              </ul>
            </div>
            <div>
              <strong>Amazon Payment Products</strong>
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'grid', gap: 6, fontSize: 14 }}>
                <li>Business Card</li>
                <li>Shop with Points</li>
              </ul>
            </div>
            <div>
              <strong>Let Us Help You</strong>
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'grid', gap: 6, fontSize: 14 }}>
                <li>Your Account</li>
                <li>Shipping Rates</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ background: '#131921', color: '#ddd' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '12px', textAlign: 'center', fontSize: 12 }}>
            © {new Date().getFullYear()} Simplified Amazon Demo
          </div>
        </div>
      </footer>
    </main>
  );
}


