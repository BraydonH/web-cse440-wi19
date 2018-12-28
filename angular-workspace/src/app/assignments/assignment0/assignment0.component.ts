import { Component, OnInit } from '@angular/core';
import { page as PageData } from './assignment0.pagedata';

// Markdown code until I get this organized into a reusable component

import externalContent from './assignment0.content.md';
import externalTemplate from './assignment0.component.html';

import * as marked from 'marked';

let renderer = new marked.Renderer();
renderer.link = (href: string, title: string, text: string) => {
  const isExternalLink = href.startsWith('http') || href.startsWith('//');

  if (isExternalLink) {
    return `<a href="${href}">${text}</a>`;
  } else {
    return `<a routerLink="${href}">${text}</a>`;
  }
};
// let processedContent = marked.parse(externalContent, { renderer: renderer });
let processedContent = 'cat';

let processedTemplate: string = `
  <ng-template #content>
    ${processedContent}
  </ng-template>
  ${externalTemplate}
`;

// End Markdown code

@Component({
  selector: 'app-assignment0',
  template: processedTemplate,
  styleUrls: ['./assignment0.component.scss']
})
export class Assignment0Component implements OnInit {
  page = PageData;

  constructor() { }

  ngOnInit() {
  }

}
