/**
 * Created by Murphy on 2017/6/29.
 */
export abstract class SysConst {
    public static readonly FOLDER_ALIAS: any = {
        MY_FOLDER: '-my-',
        ROOT_FOLDER: '-root-',
        SHARE_FOLDER: '-shared-'
    };

    public static readonly SYSURL: any = {
        BASE_URL: '/alfresco/api/-default-/public/alfresco/versions/1',
        NODES: {
            UPDATE_NODE_CONTENT: '/nodes/{nodeId}/content',
            LOCK: '/nodes/{nodeId}/lock',
            UNLOCK: '/nodes/{nodeId}/unlock',
            TARGETS: '/nodes/{nodeId}/targets'
        },
        VERSIONS: {
            NODE_VERSONS: '/nodes/{nodeId}/versions/',
            VERSON_REVERT: '/nodes/{nodeId}/versions/{versionId}/revert',
            VERSON_CONTENT: '/nodes/{nodeId}/versions/{versionId}/content?attachment=true',
            VERSON_INFO: '/nodes/{nodeId}/versions/{versionId}'
        }

    };

    public static readonly SERVICE_URL: any = {
        BASE_URL: '/alfresco/s',
        MODEL: {
            MNG_NODE_ASPECTS: '/slingshot/doclib/action/aspects/node/workspace/SpacesStore/{nodeId}',
            GET_TYPES: '/api/defclasses/',
            GET_PROPERTIES: '/api/defclasses/{type}/properties'
        },
        RM: {
            DOCLIB: `/slingshot/doclib2/rm/doclist/all/site/rm/documentLibrary`,
            CONTAINER: '/slingshot/doclib/doclist/all/site/rm/documentLibrary',
            MOVETO: '/slingshot/doclib/action/rm-move-to/site/rm/documentLibrary',
            COPYTO: '/slingshot/doclib/action/rm-copy-to/site/rm/documentLibrary',
            RULES: {
                NODE_RULES: '/api/node/workspace/SpacesStore/{nodeId}/ruleset/rules',
                NODE_RULE: '/api/node/workspace/SpacesStore/{nodeId}/ruleset/rules/{ruleId}',
                TRIGGERS: '/api/ruletypes',
                CONDITIONS: '/api/rm/rm-actionconditiondefinitions',
                ACTIONS: '/api/rm/rm-actiondefinitions'

            }

        }
    };

    public static readonly RM_REST_URL: any = {
        BASE_URL: '/alfresco/api/-default-/public/gs/versions/1',
        GS_SITE: `/gs-sites/rm`,
        FILEPLAN_CAT: '/file-plans/-filePlan-/categories',
        CAT_CHILDREN: `/record-categories/{recordCategoryId}/children`,
        FOLDER_CHILDREN: `/record-folders/{recordFolderId}/records`,
        UNFILED_CONT_CHLD: '/unfiled-containers/{unfiledContainerId}/children',
        UNFILED_FOLDER_CHLD: '/unfiled-record-folders/{unfiledRecordFolderId}/children',
        ROOT_CAT_INFO: '/file-plans/-filePlan-',
        CAT_INFO: '/record-categories/{recordCategoryId}',
        CAT_FOLDER_INFO: '/record-folders/{recordFolderId}',
        CAT_RECORD_INFO: '/records/{recordId}',
        CAT_RECORD_CONTENT: '/records/{recordId}/content',
        UNFILED_CONT_INFO: '/unfiled-containers/{unfiledContainerId}',
        UNFILED_RECORD_INFO: '/unfiled-record-folders/{unfiledRecordFolderId}',
        UNFILED_RECORD_CONTENT: '/unfiled-record-folders/{unfiledRecordFolderId}/content'
    };

    public static readonly NON_RECORD_TYPES: string[] = ['rma:recordFolder', 'rma:recordCategory',
        'rma:unfiledRecordContainer', 'rma:unfiledRecordFolder'];


    public static readonly STORAGE_KEY: any = {
        ROOT_FOLDER_ID: 'files-rootId',
        CUR_FOLDER_ID: 'current-folder-id'
    };

    public static readonly ONLINEEDIT_EXTNAME: string[] = ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.rtf'];

    public static readonly ASPECT_NAMES: any = {
        MOVETO: 'test:creditcard'
    };

    public static readonly MODEL: any = {
        MODEL_EXCEPT: ['rn:renditioned', 'cm:versionable', 'cm:taggable', 'cm:auditable', 'rmv:versionRecord',
            'cm:thumbnailModification', 'cm:generalclassifiable', 'rn:renditioned', 'rma:record', 'rma:recordOriginatingDetails',
            'rma:rootNodeRef', 'rma:recordComponentIdentifier', 'rma:filePlanComponent', 'rma:recordSearch'],
        PROPERTY_EXCEPT: ['cm:content', 'cm:name'],
        BASE_ORDER: ['cm:author', 'cm:titled'],
        DATE_TYPES: {
            TEXT: 'd:text',
            MLTEXT: 'd:mltext',
            DATE: 'd:date',
            DATETIME: 'd:datetime',
            SELECT: 'd:select', // 自定义的，为了选择框
            INT: 'd:int',
            BOOL: 'd:boolean',
            LONG: 'd:long',
            FLOAT: 'd:float',
            DOUBLE: 'd:double'
        },
        CONSTRAINTS: {
            MINMAX: {
                NAME: 'MINMAX',
                MIN: 'minValue',
                MAX: 'maxValue'
            },
            LENGTH: {
                NAME: 'LENGTH',
                MIN: 'minLength',
                MAX: 'maxLength'
            },
            REGEX: {
                NAME: 'REGEX',
                EXP: 'expression'
            },
            LIST: {
                NAME: 'LIST',
                VALUES: 'allowedValues'
            }
        },
        DATETIME_LOCALE_ZH: {
            firstDayOfWeek: 0,
            dayNames: [ '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日' ],
            dayNamesShort: [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
            dayNamesMin: [ '一', '二', '三', '四', '五', '六', '日' ],
            monthNames: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
            monthNamesShort: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ]
        },
        ERR_MSG_KEY: {
            required: 'PROPERTIES.VALIDATE_ERR.REQUIRED',
            minValue: 'PROPERTIES.VALIDATE_ERR.MINVALUE',
            maxValue: 'PROPERTIES.VALIDATE_ERR.MAXVALUE',
            minlength: 'PROPERTIES.VALIDATE_ERR.MINLENGTH',
            maxlength: 'PROPERTIES.VALIDATE_ERR.MAXLENGTH',
            notinteger: 'PROPERTIES.VALIDATE_ERR.NOTINTEGER',
            notfloat: 'PROPERTIES.VALIDATE_ERR.NOTFLOAT',
            notdouble: 'PROPERTIES.VALIDATE_ERR.NOTDOUBLE',
            notboolean: 'PROPERTIES.VALIDATE_ERR.NOTBOOLEAN'

        }
    };



}
