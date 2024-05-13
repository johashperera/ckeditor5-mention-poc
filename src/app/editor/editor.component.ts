import {Component} from '@angular/core';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import {EditorConfig} from "@ckeditor/ckeditor5-core";
import {MentionFeedItem} from "@ckeditor/ckeditor5-mention/src/mentionconfig";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  public editor: any = Editor;

  mentionFeeds: MentionFeedItem[] = [
    {
      id: '@name',
      text: 'Sample name text'
    },
    {
      id: '@conference',
      text: 'Sample conference text'
    },
    {
      id: '@title',
      text: 'Sample tile text'
    },
  ]

  editorConfig: EditorConfig = {
    mention: {
      feeds: [
        {
          marker: '@',
          feed: this.mentionFeeds,
          itemRenderer: (item) => {
            return this.getElement(item);
          }
        }
      ],
    }
  }

  getElement(item: any): HTMLElement {
    console.log(item)

    const div = document.createElement('div');
    div.className = 'element-item';

    const span = document.createElement('span');
    span.textContent = item.id;

    const p = document.createElement('p');
    p.textContent = item.text;

    div.appendChild(span);
    div.appendChild(p);

    div.style.backgroundColor = '#edffed';
    span.style.color = 'green';
    span.style.fontSize = '16px';

    return div as HTMLElement;
  }

}
