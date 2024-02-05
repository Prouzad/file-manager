## File-manager

### The program is started by npm-script start in following way:

- npm run start -- --username=your_username
- npm run start -- --username=Prouzad

#### Instruction commands

- help

#### Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)

- up

#### Go to dedicated folder from current directory (path_to_directory can be relative or absolute)

- cd path_to_directory
- cd ..
- cd d:
- cd your_files

#### List all files and folder in current directory and print it to console

- ls

#### Read file and print it's content in console

- cat path_to_file
- cat your_file/text.txt
- cat text.txt

#### Create empty file in current working directory (здесь первый аргумент должно быть названия файла)

- add new_file_name
- add text.txt

#### Rename file (здесь первый аргумент должно быть названия файла и второй аргумент должно быть новая названия файла)

- rn path_to_file new_filename
- rn your_file/text.txt newText.txt
- rn text.txt newText.txt

#### Copy file (first arg is fileName, second arg is path where you want to copy file) здесь первый аргумент должно быть названия файла и второй аргумент должно быть путь к папке где хотите скопировать

- cp path_to_file path_to_new_directory
- cp your_file/text.txt ./
- cp text.txt ../your_files

#### Move file (здесь первый аргумент должно быть названия файла и второй аргумент должно быть путь к папке где хотите переместить)

- mv path_to_file path_to_new_directory
- mv your_file/text.txt ./
- mv text.txt ../your_files

#### Delete file

- rm path_to_file
- rm text.txt

#### Get EOL (default system End-Of-Line)

- os --EOL

#### Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)

- os --cpus

#### Get home directory:

- os --homedir

#### Get current system user name (Do not confuse with the username that is set when the application starts)

- os --username

#### Get CPU architecture for which Node.js binary has compiled

- os --architecture

#### Calculate hash for file and print it into console

- hash path_to_file

#### Compress file (здесь первый аргумент должно быть названия файла и второй аргумент должно быть путь к папке где хотите архивировать)

- compress path_to_file path_to_destination

#### Decompress file (здесь первый аргумент должно быть названия файла и второй аргумент должно быть путь к папке где хотите разархивировать)

- decompress path_to_file path_to_destinationfile-manager
