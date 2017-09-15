/**
 * Created by wuhao on 2017/9/15.
 */
import { ColorsService } from '@core/services/colors.service';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { DocumentlistService } from './documentlist.service';
import { NzMessageService } from 'ng-zorro-antd';
import {MinimalNodeEntity, NodePaging, Pagination} from 'alfresco-js-api';
import { TableData } from './documentlist.model';

@Component({
    selector: 'app-base-documentlist',
    templateUrl: './documentlist.component.html',
    styleUrls: ['./documentlist.component.scss'],
    providers: [ DocumentlistService ]
})
export class DocumentlistComponent implements OnInit, OnChanges {

    @Input()
    currentFolderId: string = '-my-';

    @Input()
    nodesDataWithPagination: any;

    @Output()
    folderChange: EventEmitter<any> = new EventEmitter<any>();

    data: TableData[];
    _allChecked = false;
    _indeterminate = false;
    isLoading: boolean = false;
    pagination: Pagination;

    constructor(private documentlistService: DocumentlistService,
                private _message: NzMessageService) {

    }

    ngOnInit() {
        this.data = [];
        this.pagination = {
            maxItems: 10,
            skipCount: 0,
        };
        this.loadDocumentlist();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['currentFolderId'] && !!changes['currentFolderId'].previousValue &&
            (changes['currentFolderId'].currentValue !== changes['currentFolderId'].previousValue)) {
            this.loadDocumentlist();
        }
    }

    loadDocumentlist() {
        this.isLoading = true;
        this.documentlistService.getFolder(this.currentFolderId, this.pagination)
            .subscribe((success: NodePaging) => {
               this.data = success.list.entries.map(node => {
                   return {node: node, isChecked: false};
               });
               console.log(success.list.pagination);
               this.isLoading = false;
            },
            error => {
                this.isLoading = false;
                if (error !== 401){ // 401已被处理
                    this._message.error(error);
                }
            });
    }

    _checkAll(event: any) {
        this._allChecked = !this._allChecked;
    }

    _refreshStatus() {

    }

    get pageIndex() {
        return 1 + Math.round(this.pagination.skipCount / this.pagination.maxItems);
    }

    onClickFile(data: TableData, event: any) {
        if(data.node.entry.isFolder) {
            this.folderChange.emit(data.node.entry.id);
        }else {
            this._message.success('this is a file');
        }
    }
}
