import express from "express";
import recordEndpoint from "../apis/recordEndpoint";
import {catchErrors} from "../helpers/errorHandlers";
const router = express.Router();

/**
 * List records
 * @route Get /api/records
 * @group Record
 * @param {string} startDate.query.required - start date
 * @param {string} endDate.query.required - end Date
 * @param {number} minCount.query.required - min count
 * @param {number} maxCount.query.required - max count
 * @returns {object} 200 -
 * @returns {Error}  default - Unexpected error
 */
router.get("/api/records", catchErrors(recordEndpoint.getRecords));

export default router;