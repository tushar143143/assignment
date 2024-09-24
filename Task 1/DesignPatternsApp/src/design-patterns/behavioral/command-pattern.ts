import { Logger } from '../../services/logging-service';

interface Command {
  execute(): void;
  undo(): void;
}

class FileSystem {
  createFile(name: string) {
    Logger.log(`File created: ${name}`);
  }

  deleteFile(name: string) {
    Logger.log(`File deleted: ${name}`);
  }
}

class CreateFileCommand implements Command {
  constructor(private fs: FileSystem, private filename: string) {}

  execute() {
    this.fs.createFile(this.filename);
  }

  undo() {
    this.fs.deleteFile(this.filename);
  }
}

class DeleteFileCommand implements Command {
  constructor(private fs: FileSystem, private filename: string) {}

  execute() {
    this.fs.deleteFile(this.filename);
  }

  undo() {
    this.fs.createFile(this.filename);
  }
}

// Sample usage
const fileSystem = new FileSystem();
const createFileCmd = new CreateFileCommand(fileSystem, "log.txt");

createFileCmd.execute(); // Creates the file
createFileCmd.undo(); // Undoes the creation
