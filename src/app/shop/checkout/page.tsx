'use client';

import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');
  const [phone, setPhone] = useState(''); 
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [iban, setIban] = useState(''); 
  const [cart, setCart] = useState<any[]>([]); 
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const generateIban = () => {
    const randomDigits = Math.floor(1000000000 + Math.random() * 9000000000);
    return `CH93 0076 2012 2005 4385 7${randomDigits}`;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item: any) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (!name || !address || !email || !payment || (payment === 'Twint' && !phone)) {
      alert('Bitte fülle alle Felder aus!');
    } else {

      const order = {
        name,
        address,
        email,
        payment,
        phone: payment === 'Twint' ? phone : null,
        iban: payment === 'Banküberweisung' ? iban : null,
      };


      console.log('Bestellung:', order);


      setIsOrderPlaced(true);


      localStorage.removeItem('cart');


      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Deine Bestellung</h2>
            <div className="border-b py-4 mb-4">
              {cart.length === 0 ? (
                <p>Dein Warenkorb ist leer.</p>
              ) : (
                <div>
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <p>{item.name} x {item.quantity}</p>
                      <p>CHF {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="flex justify-between mt-4">
                    <p className="font-bold">Gesamtsumme:</p>
                    <p className="font-bold">CHF {calculateTotal().toFixed(2)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {isOrderPlaced ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Vielen Dank für deinen Einkauf!</h2>
              <p>Du wirst in wenigen Sekunden zur Startseite weitergeleitet...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-semibold">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold">Adresse:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Musterstraße 1, 8000 Zürich"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold">E-Mail:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="max.mustermann@email.com"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold">Zahlungsinformation:</label>
                <select
                  value={payment}
                  onChange={(e) => {
                    setPayment(e.target.value);
                    if (e.target.value === 'Banküberweisung') {
                      setIban(generateIban()); 
                    }
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Wählen Sie eine Zahlungsmethode</option>
                  <option value="Rechnung">Rechnung</option>
                  <option value="Twint">Twint</option>
                  <option value="Banküberweisung">Banküberweisung</option>
                </select>
              </div>

              {payment === 'Twint' && (
                <div>
                  <label className="block text-lg font-semibold">Telefonnummer (für Twint):</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required={payment === 'Twint'} 
                    placeholder="079 123 45 67"
                  />
                </div>
              )}

              {payment === 'Banküberweisung' && (
                <div>
                  <h3 className="font-semibold mt-4">Banküberweisung Details:</h3>
                  <p className="mt-2 text-sm">IBAN: {iban}</p>
                  <div className="mt-2 text-sm">
                    <strong>Bank: Muster Bank AG</strong>
                    <p>Adresse: Musterstraße 12, 8000 Zürich, Schweiz</p>
                    <p>SWIFT/BIC: MUBKCHZZ</p>
                  </div>
                </div>
              )}

              <div className="mt-4 text-center">
                <button
                  type="submit"
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Bestellen
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
