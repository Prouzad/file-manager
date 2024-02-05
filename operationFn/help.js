export function helpFn() {
  const arr = [
    {
      description: `Перейти наверх из текущего каталога`,
      command: "up",
    },
    {
      description: `Перейти в выделенную папку из текущего каталога (path_to_directory может быть относительным или абсолютным)`,
      command: "cd path_to_directory",
    },
    {
      description:
        "Вывести в консоли список всех файлов и папок в текущем каталоге.",
      command: "ls",
    },
    {
      description: `Read file and print it's content in console`,
      command: "cat path_to_file",
    },
    {
      description: "Создать пустой файл в текущем рабочем каталоге:",
      command: "add new_file_name",
    },
    {
      description: "Переименуйте файл",
      command: "rn path_to_file new_filename",
    },
    {
      description: "Копировать файл",
      command: "cp path_to_file path_to_new_directory",
    },
    {
      description: "Переместить файл",
      command: "mv path_to_file path_to_new_directory",
    },
    {
      description: "Удалить файл:",
      command: "rm path_to_file",
    },
    {
      description: "Получите EOL (системный End-Of-Line по умолчанию)",
      command: "os --EOL",
    },
    {
      description: "Получить информацию о процессорах хост-машины",
      command: "os --cpus",
    },
    {
      description: "Получить домашний каталог и вывести его на консоль",
      command: "os --homedir",
    },
    {
      description: "получить текущее имя пользователя системы",
      command: "os --username",
    },
    {
      description:
        "Получите архитектуру ЦП, для которой скомпилирован двоичный файл Node.js.",
      command: "os --architecture",
    },
    {
      description: "Расчет хэша",
      command: "hash path_to_file",
    },
    {
      description: "сжать файл",
      command: "compress path_to_file path_to_destination",
    },
    {
      description: "Распаковать файл",
      command: "decompress path_to_file path_to_destination",
    },
  ];
  console.table(arr);
}
