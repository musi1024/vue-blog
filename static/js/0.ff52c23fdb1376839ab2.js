webpackJsonp([0],{ZYmg:function(e,t,n){"use strict";var a=n("p+dL"),d={GetList:"/blog",GetDetail:"/blog/:blogId",Create:"/blog",Update:"/blog/:blogId",Delete:"/blog/:blogId"};t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},t=e.page,n=void 0===t?1:t,o=e.userId,i=e.atIndex;return Object(a.a)(d.GetList,"GET",{page:n,userId:o,atIndex:i})},getIndex:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1}).page,t=void 0===e?1:e;return this.getAll({page:t,atIndex:!0})},getByUserId:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=t.page,a=void 0===n?1:n,d=t.atIndex;return this.getAll({userId:e,page:a,atIndex:d})},getDetail:function(e){var t=e.blogId;return Object(a.a)(d.GetDetail.replace(":blogId",t))},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",content:"",description:"",atIndex:!1},t=e.title,n=void 0===t?"":t,o=e.content,i=void 0===o?"":o,l=e.description,r=void 0===l?"":l,g=e.atIndex,c=void 0!==g&&g;return Object(a.a)(d.Create,"POST",{title:n,content:i,description:r,atIndex:c})},update:function(e,t){var n=e.blogId,o=t.title,i=t.content,l=t.description,r=t.atIndex;return Object(a.a)(d.Update.replace(":blogId",n),"PATCH",{title:o,content:i,description:l,atIndex:r})},delete:function(e){var t=e.blogId;return Object(a.a)(d.Delete.replace(":blogId",t),"DELETE")}}}});
//# sourceMappingURL=0.ff52c23fdb1376839ab2.js.map