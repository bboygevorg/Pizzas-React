import React, { Suspense } from 'react';
import LoadableExport from 'react-loadable';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import MainLayout from './layout/MainLayout';

import Home from './pages/Home';
// import Cart from './pages/Cart';
// import FullPizza from './pages/FullPizza';
// import NotFound from './pages/NotFound';

// const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const Cart = LoadableExport({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

// const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const FullPizza = LoadableExport({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/FullPizza'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

// const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));
const NotFound = LoadableExport({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/NotFound'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
function Loadable(arg0: { loader: () => Promise<typeof import('./pages/Cart')>; loading: any }) {
  throw new Error('Function not implemented.');
}
