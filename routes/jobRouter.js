import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
  showStats
} from "../controllers/jobController.js";
import {
  validationJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

// router.get('/',getAllJobs);
// router.post('/',createJob);


router.route("/").get(getAllJobs).post(checkForTestUser,validationJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser,validationJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser,validateIdParam, deleteJob);

export default router;
