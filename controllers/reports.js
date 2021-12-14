const Report = require('../models/report');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const {
  msgNotFoundReport,
  msgNotFoundReports,
  msgForbiddenDel,
  msgSuccessDel,
} = require('../utils/constants');

const getReports = (req, res, next) => {
  Report.find()
    .sort({ id: -1 })
    .populate('owner')
    .then((reports) => {
      if (!reports) {
        throw new NotFoundError(msgNotFoundReports);
      }
      res.send(reports);
    })
    .catch(next);
};

const createReport = (req, res, next) => {
  const {
    id, object, address, rating, reportURL,
  } = req.body;
  const { _id } = req.user;

  Report.create({
    id,
    object,
    address,
    owner: _id,
    rating,
    reportURL,
  })
    .then((report) => {
      res.send(report);
    })
    .catch(next);
};

const deleteReport = (req, res, next) => {
  const { reportId } = req.params;
  const { _id } = req.user;

  Report.findById(reportId)
    .orFail(new NotFoundError(msgNotFoundReport))
    .then((report) => {
      if (report.owner.toString() !== _id) {
        throw new ForbiddenError(msgForbiddenDel);
      } else {
        Report.findByIdAndRemove(reportId)
          .then(() => res.send({ message: msgSuccessDel }))
          .catch(next);
      }
    })
    .catch(next);
};

module.exports = { getReports, createReport, deleteReport };
