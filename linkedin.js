/*
  
  Steps to customize or alter the Bookmarlet:

  1)  Compress the CSS using something like: http://cssminifier.com/
        #header,
        #headline-container,
        .profile-aux,
        .demographic-info,
        .profile-card table,
        #website-view li+li,
        .profile-card-extras .profile-actions .show-more-info,
        #text-ad-container,
        #activity,
        .background-section .education-associated ul li p span,
        #profile-skills h5,
        .see-more-less,
        a.toggle-show-more[title=\"Show less\"],
        .background-section .education-associated dt span.closed,
        .background-section h4 a span,
        .endorse-count,
        .endorsers-container,
        .endorsements-nav,
        #connections,
        #groups-container,
        #following-container,
        #aux,
        #footer,
        .edit-tools {
          display: none!important;
        }

        #contact-info-section {
          display: block;
          float: left;
          position: absolute;
          z-index: 100;
          margin-top: -96px;
          left: 2em;
          background: 0;
        }

        .profile-card-extras .profile-actions {
          margin-top: -3.25em!important;
          left: 84px;
          position: relative;
        }

        .profile-card-extras .profile-actions:before {
          position: absolute;
          content: 'LinkedIn';
          color: #999;
          font-size: 12px;
          line-height: 2em;
          vertical-align: middle!important;
          width: 60px;
          left: -60px;
        }

        #body, 
        #body .hp-nus-wrapper {
          width: 100%;
          margin: 0!important;
          padding: 0!important;

        }

        #wrapper {
          width: auto;
          padding: .5em;
        }

        #profile {
          width: 100%;
        }

        .profile-card {
          width: 100%;
        }

        .profile-card .profile-picture,
        .profile-card .profile-overview {
          display: table-cell;
          width: none;
          float: none;
          vertical-align: middle;
          margin: 0em;
          padding: 2em;
          height: auto;
          line-height: 1;
          background: 0;
        }

        .profile-card .profile-picture {
          float: right;
        }


        .profile-card .profile-overview-content {
          min-height: 0;
          height: auto;
          padding-top: 0;
          padding-bottom: 0;
        }

        .profile-top-card,
        .profile-card .profile-picture img,
        .more-info,
        .profile-card-extras .profile-actions,
        .profile-activity, 
        .profile-background, 
        .profile-endorsements, 
        .profile-groups, 
        .profile-following, 
        .profile-connections, 
        .profile-your-notes {
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
        }

        .profile-card .title {
          line-height: 1.7;
        }

        .more-info table th,
        .more-info table tr.twitter-presence th, 
        .more-info table tr.www-presence th,
        .profile-card-extras .profile-actions .public-profile span,
        .profile-card-extras .profile-actions .public-profile a {
          margin: 0;
          padding: 0;
          background: 0;
          font-size: 12px;
          line-height: 1.7em;
          vertical-align: middle;
          width: 60px;
        }
        .profile-card-extras .profile-actions .public-profile a {
          width: auto;
        }

        .profile-card-extras .profile-actions .public-profile span {
          float: left;
          color: #999;
        }

        .more-info table,
        .profile-card-extras .profile-actions {
          float: left;
          clear: left;
          margin: 0;
          padding: 0;
        }

        .profile-card-extras .profile-actions {
          border: 0;
          background: 0;
        }

        .profile-card-extras .profile-actions ul,
        .profile-card-extras .profile-actions ul li {
          margin: 0;
          padding: 0;
        }
        
        .skills-section .endorse-item {
          display: -moz-inline-stack;
          display: inline-block;
          vertical-align: middle;
          zoom: 1;
          margin-top: 0px;
          margin-bottom: 5px;
          margin-left: 0px;
          margin-right: 5px;
        }
        
        .compact-view {
          margin-top: 0;
        }
        
        .compact-view .endorse-item.extra-skill {
          display: inline-block;
        }

        .background-section h3, .background-section-drag-proxy h3 {
          background-image: url('http://www.linkedin.com/scds/common/u/img/sprite/sprite_profile_background_v3.png');
        }

        #background-certifications, #background-courses, #background-education, #background-experience, #background-honors, #background-languages, #background-organizations, #background-patents, #background-projects, #background-publications, #background-skills, #background-summary, #background-test-scores, #background-volunteering, #background-additional-info {
          margin-top: 15px;
        }
        
        .background-section .education-associated dt:after {
          display: -moz-inline-stack;
          display: inline-block;
          vertical-align: middle;
          zoom: 1;
          height: 9px;
          width: 5px;
          margin-left: 2px;
          margin-right: 0px;
          background: url('http://www.linkedin.com/scds/common/u/images/apps/profile/sprite/sprite_profile_edit_tools_v12.png') no-repeat 0 -850px;
          content: '';
        }

        .profile-endorsements {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        #languages-view ol {
          float: none;
          width: 100%;
          display: table;
        }

        #languages-view li {
          float: none;
          min-height: 0;
          display: table-row;
          width: 100%;
        }

        #languages-view h4,
        #languages-view span {
          display: table-cell;
          min-width: 8em;
          padding: .25em;
        }

        .endorsement-info {
          float: none;
          width: auto;
          padding-left: 100px;
          padding-bottom: 0;
        }

        a, a * {
          color: #333!important;
        }

        @media print {
          p, h2, h3 { orphans: 3; widows: 3; }
          h2, h3 { page-break-after: avoid; }
          .background-section hgroup { page-break-inside: avoid; }
        }

  2)  Paste the compressed CSS into the value of the "css" variable in the JavaScript code below

  3)  Compress the JS using something like: http://javascript-minifier.com/
        var head = document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = "#header,#headline-container,.profile-aux,.demographic-info,.profile-card table,#website-view li+li,.profile-card-extras .profile-actions .show-more-info,#text-ad-container,#activity,.background-section .education-associated ul li p span,#profile-skills h5,.see-more-less,a.toggle-show-more[title=\"Show less\"],.background-section .education-associated dt span.closed,.background-section h4 a span,.endorse-count,.endorsers-container,.endorsements-nav,#connections,#groups-container,#following-container,#aux,#footer,.edit-tools{display:none!important}#contact-info-section{display:block;float:left;position:absolute;z-index:100;margin-top:-96px;left:2em;background:0}.profile-card-extras .profile-actions{margin-top:-3.25em!important;left:84px;position:relative}.profile-card-extras .profile-actions:before{position:absolute;content:'LinkedIn';color:#999;font-size:12px;line-height:2em;vertical-align:middle!important;width:60px;left:-60px}#body,#body .hp-nus-wrapper{width:100%;margin:0!important;padding:0!important}#wrapper{width:auto;padding:.5em}#profile{width:100%}.profile-card{width:100%}.profile-card .profile-picture,.profile-card .profile-overview{display:table-cell;width:none;float:none;vertical-align:middle;margin:0;padding:2em;height:auto;line-height:1;background:0}.profile-card .profile-picture{float:right}.profile-card .profile-overview-content{min-height:0;height:auto;padding-top:0;padding-bottom:0}.profile-top-card,.profile-card .profile-picture img,.more-info,.profile-card-extras .profile-actions,.profile-activity,.profile-background,.profile-endorsements,.profile-groups,.profile-following,.profile-connections,.profile-your-notes{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.profile-card .title{line-height:1.7}.more-info table th,.more-info table tr.twitter-presence th,.more-info table tr.www-presence th,.profile-card-extras .profile-actions .public-profile span,.profile-card-extras .profile-actions .public-profile a{margin:0;padding:0;background:0;font-size:12px;line-height:1.7em;vertical-align:middle;width:60px}.profile-card-extras .profile-actions .public-profile a{width:auto}.profile-card-extras .profile-actions .public-profile span{float:left;color:#999}.more-info table,.profile-card-extras .profile-actions{float:left;clear:left;margin:0;padding:0}.profile-card-extras .profile-actions{border:0;background:0}.profile-card-extras .profile-actions ul,.profile-card-extras .profile-actions ul li{margin:0;padding:0}.skills-section .endorse-item{display:-moz-inline-stack;display:inline-block;vertical-align:middle;zoom:1;margin-top:0;margin-bottom:5px;margin-left:0;margin-right:5px}.compact-view{margin-top:0}.compact-view .endorse-item.extra-skill{display:inline-block}.background-section h3,.background-section-drag-proxy h3{background-image:url(http://www.linkedin.com/scds/common/u/img/sprite/sprite_profile_background_v3.png)}#background-certifications,#background-courses,#background-education,#background-experience,#background-honors,#background-languages,#background-organizations,#background-patents,#background-projects,#background-publications,#background-skills,#background-summary,#background-test-scores,#background-volunteering,#background-additional-info{margin-top:15px}.background-section .education-associated dt:after{display:-moz-inline-stack;display:inline-block;vertical-align:middle;zoom:1;height:9px;width:5px;margin-left:2px;margin-right:0;background:url(http://www.linkedin.com/scds/common/u/images/apps/profile/sprite/sprite_profile_edit_tools_v12.png) no-repeat 0 -850px;content:''}.profile-endorsements{margin-bottom:0;padding-bottom:0}#languages-view ol{float:none;width:100%;display:table}#languages-view li{float:none;min-height:0;display:table-row;width:100%}#languages-view h4,#languages-view span{display:table-cell;min-width:8em;padding:.25em}.endorsement-info{float:none;width:auto;padding-left:100px;padding-bottom:0}a,a *{color:#333!important}@media print{p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}.background-section hgroup{page-break-inside:avoid}}";
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);

  4)  Prefix all of that with "javascript:"

  5)  Paste all of that into the Bookmarlet

*/

/* Example of final code to paste into Bookmarklet: */
  javascript:var head=document.getElementsByTagName("head")[0],style=document.createElement("style"),css="#header,#headline-container,.profile-aux,.demographic-info,.profile-card table,#website-view li+li,.profile-card-extras .profile-actions .show-more-info,#text-ad-container,#activity,.background-section .education-associated ul li p span,#profile-skills h5,.see-more-less,a.toggle-show-more[title=\"Show less\"],.background-section .education-associated dt span.closed,.background-section h4 a span,.endorse-count,.endorsers-container,.endorsements-nav,#connections,#groups-container,#following-container,#aux,#footer,.edit-tools{display:none!important}#contact-info-section{display:block;float:left;position:absolute;z-index:100;margin-top:-96px;left:2em;background:0}.profile-card-extras .profile-actions{margin-top:-3.25em!important;left:84px;position:relative}.profile-card-extras .profile-actions:before{position:absolute;content:'LinkedIn';color:#999;font-size:12px;line-height:2em;vertical-align:middle!important;width:60px;left:-60px}#body,#body .hp-nus-wrapper{width:100%;margin:0!important;padding:0!important}#wrapper{width:auto;padding:.5em}#profile{width:100%}.profile-card{width:100%}.profile-card .profile-picture,.profile-card .profile-overview{display:table-cell;width:none;float:none;vertical-align:middle;margin:0;padding:2em;height:auto;line-height:1;background:0}.profile-card .profile-picture{float:right}.profile-card .profile-overview-content{min-height:0;height:auto;padding-top:0;padding-bottom:0}.profile-top-card,.profile-card .profile-picture img,.more-info,.profile-card-extras .profile-actions,.profile-activity,.profile-background,.profile-endorsements,.profile-groups,.profile-following,.profile-connections,.profile-your-notes{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.profile-card .title{line-height:1.7}.more-info table th,.more-info table tr.twitter-presence th,.more-info table tr.www-presence th,.profile-card-extras .profile-actions .public-profile span,.profile-card-extras .profile-actions .public-profile a{margin:0;padding:0;background:0;font-size:12px;line-height:1.7em;vertical-align:middle;width:60px}.profile-card-extras .profile-actions .public-profile a{width:auto}.profile-card-extras .profile-actions .public-profile span{float:left;color:#999}.more-info table,.profile-card-extras .profile-actions{float:left;clear:left;margin:0;padding:0}.profile-card-extras .profile-actions{border:0;background:0}.profile-card-extras .profile-actions ul,.profile-card-extras .profile-actions ul li{margin:0;padding:0}.skills-section .endorse-item{display:-moz-inline-stack;display:inline-block;vertical-align:middle;zoom:1;margin-top:0;margin-bottom:5px;margin-left:0;margin-right:5px}.compact-view{margin-top:0}.compact-view .endorse-item.extra-skill{display:inline-block}.background-section h3,.background-section-drag-proxy h3{background-image:url(http://www.linkedin.com/scds/common/u/img/sprite/sprite_profile_background_v3.png)}#background-certifications,#background-courses,#background-education,#background-experience,#background-honors,#background-languages,#background-organizations,#background-patents,#background-projects,#background-publications,#background-skills,#background-summary,#background-test-scores,#background-volunteering,#background-additional-info{margin-top:15px}.background-section .education-associated dt:after{display:-moz-inline-stack;display:inline-block;vertical-align:middle;zoom:1;height:9px;width:5px;margin-left:2px;margin-right:0;background:url(http://www.linkedin.com/scds/common/u/images/apps/profile/sprite/sprite_profile_edit_tools_v12.png) no-repeat 0 -850px;content:''}.profile-endorsements{margin-bottom:0;padding-bottom:0}#languages-view ol{float:none;width:100%;display:table}#languages-view li{float:none;min-height:0;display:table-row;width:100%}#languages-view h4,#languages-view span{display:table-cell;min-width:8em;padding:.25em}.endorsement-info{float:none;width:auto;padding-left:100px;padding-bottom:0}a,a *{color:#333!important}@media print{p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}.background-section hgroup{page-break-inside:avoid}}";style.type="text/css",style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css)),head.appendChild(style);


