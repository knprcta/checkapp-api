const router = require('express').Router();

const {
  getReports,
  createReport,
  deleteReport,
} = require('../controllers/reports');
const {
  validateReport,
  validateReportId,
} = require('../middlewares/validator');

router.get('/', getReports);
router.post('/', validateReport, createReport);
router.delete('/:reportId', validateReportId, deleteReport);

module.exports = router;
