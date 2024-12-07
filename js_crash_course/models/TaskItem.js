export default class TaskItem {
  constructor( title, description ) {
    this.title = title;
    this.description = description;
  }

  isChecked = false;

  toggleChecked() {
    this.isChecked = !isChecked;
  }
}
