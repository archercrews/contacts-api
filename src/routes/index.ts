import { Router } from 'express';
import { ContactsRouter } from './Contacts';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/contacts', new ContactsRouter().router);

// Export the base-router
export default router;
