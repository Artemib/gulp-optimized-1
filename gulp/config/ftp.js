import { path } from "./path.js";

export let configFTP = {
	host: "", // Адрес FTP сервера
	user: "", // Имя пользователя
	password: "", // Пароль
	parallel: 5 // Кол-во одновременных потоков
}

// Путь загрузки проекта на сервер - (path.rootFolder - название текущей папки)
export let pathFTP = `/${path.rootFolder}/public_html/`;