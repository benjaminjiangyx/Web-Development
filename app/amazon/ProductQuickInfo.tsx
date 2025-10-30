'use client';

import { useState } from 'react';

type Product = {
  id: string;
  title: string;
  price: number;
  rating: number;
  img: string;
};

export default function ProductQuickInfo({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          width: '100%',
          padding: '8px 10px',
          background: '#f0f2f2',
          border: '1px solid #d5d9d9',
          borderRadius: 20,
          cursor: 'pointer',
          fontWeight: 600,
          marginTop: 8,
        }}
      >
        Quick view
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(0,0,0,0.5)',
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: 'min(720px, calc(100% - 24px))',
              background: 'white',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              <div style={{ background: '#f7f7f7', minHeight: 280 }}>
                <img src={product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 16, display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.3 }}>{product.title}</h3>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    style={{ background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}
                  >
                    ×
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong style={{ color: '#B12704', fontSize: 20 }}>${product.price.toFixed(2)}</strong>
                  <span aria-hidden>·</span>
                  <span>{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                </div>

                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, display: 'grid', gap: 6 }}>
                  <li>In Stock. Ships from Amazon.</li>
                  <li>Free returns on eligible orders.</li>
                  <li>Delivery: Tomorrow with Prime.</li>
                  <li>Warranty: 1-year limited.</li>
                </ul>

                <div style={{ display: 'grid', gap: 8 }}>
                  <button
                    type="button"
                    style={{
                      padding: '10px 12px',
                      background: '#ffd814',
                      border: '1px solid #fcd200',
                      borderRadius: 24,
                      cursor: 'pointer',
                      fontWeight: 700,
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    style={{
                      padding: '10px 12px',
                      background: '#ffa41c',
                      border: '1px solid #ff8f00',
                      borderRadius: 24,
                      cursor: 'pointer',
                      fontWeight: 700,
                    }}
                  >
                    Buy Now
                  </button>
                </div>

                <div style={{ borderTop: '1px solid #e7e7e7', paddingTop: 8, fontSize: 12, color: '#555' }}>
                  Inspired by Amazon PDP elements like price, rating, delivery, and returns. See example: https://www.amazon.com/Amazon-Basics-Disposable-Clear-Plastic/dp/B0D6SQFXF7
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


