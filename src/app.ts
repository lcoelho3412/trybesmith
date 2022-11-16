import express from 'express';

import productsRoutes from './routes/products.routes';
import userRoutes from './routes/users.routes';
import orderRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use('/users', userRoutes);

app.use('/orders', orderRoutes);

export default app;
