const dbURL = 'mongodb://localhost:27017/checkapp-dev';

const msgNotFoundRes = 'Запрашиваемый ресурс не найден';

const msgNotFoundReports = 'Отчёты отсутствуют';
const msgNotFoundReport = 'Запрашиваемый отчёт не найден';
const msgForbiddenDel = 'Запрещено удалять чужие отчёты';
const msgSuccessDel = 'Отчёт удалён';
const msgNoValidUrl = 'Некорректный URL';

const msgNotFoundUser = 'Произошла ошибка. Подождите и попробуйте ещё раз.';
const msgConflictUser = 'Пользователь с данным EMAIL уже зарегистрирован';
const msgSuccessSignUp = 'Пользователь успешно зарегистрирован';
const msgUnauthorized = 'Необходима авторизация';
const msgNoValidEmail = 'Некорректный EMAIL';
const msgNoValidEmailOrPass = 'Неправильные EMAIL или пароль';

const msgDefaultErr = 'На сервере произошла ошибка';
const msgCelebrateErr = 'Запрос содержит синтаксическую ошибку';
const msgTryLater = 'Попробуйте позже';

module.exports = {
  dbURL,
  msgNotFoundRes,
  msgNotFoundReports,
  msgNotFoundReport,
  msgForbiddenDel,
  msgSuccessDel,
  msgNoValidUrl,
  msgNotFoundUser,
  msgConflictUser,
  msgSuccessSignUp,
  msgUnauthorized,
  msgNoValidEmail,
  msgNoValidEmailOrPass,
  msgDefaultErr,
  msgCelebrateErr,
  msgTryLater,
};
