import { Component } from '@angular/core';

@Component({
  selector: 'app-ngx-editor',
  imports: [],
  templateUrl: './ngx-editor.html',
  styleUrl: './ngx-editor.css'
})
export class NgxEditor {
    html = '';
  editor: NgxEditor;
  ngOnInit(): void {
    this.editor = new NgxEditor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
