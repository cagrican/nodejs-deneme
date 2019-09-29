import Record from "../../models/Record";

exports.getRecords = async (startDate,endDate,minCount,maxCount) => {
    const records = Record.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            },
            {
                $project: {
                    _id: true,
                    key: true,
                    createdAt: true,
                    totalCount: {
                        $sum: '$counts'
                    }
                }
            },
            {
                $match: {
                    totalCount: {
                        $gte: minCount,
                        $lt: maxCount
                    }
                }
            }
        ]
    )
    return records;
}