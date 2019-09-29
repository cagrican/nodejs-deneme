import services from "../services";
import {SuccessResponse} from '../helpers/responseHelpers'

exports.getRecords = async (req, res) => {
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);
    const minCount = Number(req.query.minCount);
    const maxCount = Number(req.query.maxCount);

    const records = await services.getRecords(startDate,endDate,minCount,maxCount);

    return res.json(new SuccessResponse.Builder().withRecords(records).build());
};