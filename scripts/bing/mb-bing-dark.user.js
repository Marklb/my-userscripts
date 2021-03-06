// ==UserScript==
// @name         MB Bing Dark
// @namespace    https://userscripts.themarkthings.com
// @version      0.9
// @description  Dark theme for Bing
// @author       Mark Berry (https://github.com/Marklb)
// @match        https://www.bing.com/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/bing/mb-bing-dark.user.js
// @downloadURL  https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/bing/mb-bing-dark.user.js
// ==/UserScript==

(function() {
  'use strict'

  //
  // Still new and I am just fixing styles as I notice them.
  // 
  // To change the colors just modify the css vars in the `html` rule.
  //

  console.log('[MB Bing Dark] Started')

  const css = `
  html {
    --main-bg-color: rgba(40,40,40,1);
    --main-bg-color-dark: rgba(35,35,35,1);
    --main-bg-color-bright: rgba(160,160,160,1);
  
    --main-fg-color-dim: rgba(120,120,120,1);
    --main-fg-color-soft: rgba(150,150,150,1);
    --main-fg-color-bright: rgba(230,230,230,1);
    --main-fg-color-active: rgb(203, 175, 248, 0.4);
    --main-fg-color-link: rgba(100,100,250,1);
  
    --main-border-color: rgb(203, 175, 248, 0.4);
    --main-border-color-hover: rgb(203, 175, 248, 0.5);
  
    --main-result-btn-bg: rgba(20,20,20,1);
    --main-result-btn-bg-hover: rgba(30,30,30,1);
    
    --main-result-see-all-btn-bg: var(--main-bg-color-dark);
    --main-result-see-all-btn-color: var(--main-fg-color-dim);
    --main-result-see-all-btn-color-hover: var(--main-fg-color-soft);
  
    --main-result-btn-fg-color-active: rgba(100,100,250,1);
  }
  
  html,
  body {
    background: var(--main-bg-color);
    color: var(--main-fg-color-soft);
  }
  
  input {
    color: var(--main-fg-color-soft);
    background-color: var(--main-bg-color-dark);
  }
  
  .b_searchboxForm, 
  .sa_as {
    background-color: var(--main-bg-color-dark);
  }
  
  .b_searchboxForm .b_searchboxSubmit {
    background-color: var(--main-bg-color-dark);
    border-color: var(--main-bg-color-dark);
  }
  
  #b_tween a.ftrH.b_selected {
    border-color: var(--main-border-color);
    border-bottom-color: var(--main-border-color);
  }
  
  .b_dropdown {
    background-color: var(--main-bg-color);
    border-color: var(--main-border-color);
  }
  
  div.b_dropdown .b_selected, 
  #b_tween a.ftrH.b_selected:hover {
    background: var(--main-bg-color-dark) !important;
    border-bottom-color: var(--main-bg-color-dark);
  }
  
  .ftrD>div.b_vPanel {
    border-color: var(--main-border-color);
  }
  
  .ccal {
    border: 1px solid var(--main-border-color);
  }
  
  .ccal.b_focus, 
  .ccal:hover {
    border: 1px solid var(--main-border-color-hover);
  }
  
  #id_hbfo {
    background-color: var(--main-bg-color);
  }
  
  .hb_section:active, 
  .hb_section:hover, 
  .hb_section:visited {
    background-color: var(--main-bg-color-dark);
  }
  
  #b_results>.b_pag a.sb_pagP:hover, 
  #b_results>.b_pag a.sb_pagN:hover,
  #b_results>.b_pag a:hover{
    background-color: var(--main-bg-color-dark);
  }
  
  .hbic_col, 
  .hb_title_col, 
  .hb_value_col {
    color: var(--main-fg-color-soft);
  }
  
  .vidr .vidr_info .title {
    color: var(--main-fg-color-link);
  }
  
  .va_title_mmftb:after,
  .vidr_metainfo_mmftb:after{
    background: none;
  }
  
  .twc .twsCard {
    background-color: var(--main-bg-color);
  }
  
  #twcrsl .twsCard .twsntxt {
    color: var(--main-fg-color-light);
  }
  
  #b_header {
    background: var(--main-bg-color);
    border-bottom: 1px solid var(--main-border-color);
  }
  
  #b_header #id_h span {
    color: var(--main-fg-color-soft);
  }
  
  /* #b_header .phead {
    background: var(--main-bg-color);
    border-bottom: 1px solid var(--main-bg-color-dark);
    padding: 12px 0 12px 0;
  } */
  
  #b_header .b_searchboxForm {
    border: 1px solid var(--main-bg-color-dark);
  }
  
  .b_scopebar li a {
    color: var(--main-fg-color-soft);
  }
  
  .b_scopebar li.b_active {
    border-bottom: 3px solid var(--main-fg-color-active);
  }
  
  .b_scopebar li.b_active a {
    color: var(--main-fg-color-active);
    font-weight: bold;
  }
  
  ul.b_hList li a {
    color: var(--main-fg-color-link);
  }
  
  #b_results li.b_algo,
  #b_results li.b_ans {
    border: 1px solid rgba(0,0,0,0);
  }
  #b_results li.b_algo:hover,
  #b_results li.b_ans:hover {
    border: 1px solid var(--main-border-color);
  }
  
  #b_context .b_ans a {
    color: var(--main-fg-color-link);
  }
  
  #b_context .b_ans span.sw_plus {
    color: var(--main-fg-color-link);
  }
  
  #b_context .b_ans .b_relshc .b_vList > li {
    border-top: 1px solid var(--main-border-color);
  }
  
  #b_context .b_ans .b_relshc .b_vList > li:last-child {
    border-bottom: 1px solid var(--main-border-color);
  }
  
  #b_context .b_ans .b_relshc .b_hList > li {
    border: 1px solid var(--main-border-color);
  }
  
  .b_rich .whitebg {
    background-color: var(--main-result-see-all-btn-bg) !important;
  }
  
  /* .b_rich:hover .whitebg {
    background-color: var(--main-result-btn-bg-hover) !important;
  } */
  
  .b_rich .txtblk {
    color: var(--main-result-see-all-btn-color) !important;
  }
  .b_rich:hover .txtblk {
    color: var(--main-result-see-all-btn-color-hover) !important;
  }
  .b_rich:hover .svgpath {
    fill: var(--main-result-see-all-btn-color-hover) !important;
  }
  
  #b_context .b_subModule, 
  #b_results .b_subModule {
    border-bottom: 1px solid var(--main-border-color);
  }
  
  #b_context .b_entityTitle, 
  #b_results .b_entityTitle {
    color: var(--main-fg-color-soft);
  }
  
  #b_results>li {
    background-color: var(--main-bg-color-dark);
  }
  
  #b_results>li a,
  #b_results > li .na_cnt a, .na_cnt .na_t {
    color: var(--main-fg-color-link) !important;
  }
  
  #b_results>li a:active {
    color: var(--main-result-btn-fg-color-active) !important;
  }
  
  #b_results, 
  #b_results .b_defaultText, 
  #b_results>.b_pag a:hover, 
  #b_tween .b_toggle:hover, 
  #b_tween .b_highlighted {
    color: var(--main-fg-color-soft);
  }
  
  #b_context .b_ans, #b_context #wpc_ag {
    background-color: var(--main-bg-color-dark);
  }
  
  #b_context, #b_context #wpc_eif {
    color: var(--main-fg-color-soft);
  }
  
  #sw_as {
    color: var(--main-fg-color-soft);
  }
  
  #sw_as .sa_as {
    background-color: var(--main-bg-color);
  }
  
  #sw_as .sa_as .sa_sg .sa_tm, #sw_as .sa_as .b_tHeader, #sw_as .sa_as .b_demoteText, #sw_as .sa_as .b_secondaryText, #sw_as .sa_as .b_attribution, #sw_as .sa_as .b_factrow, #sw_as .sa_as #sa_ul .b_focusLabel, #sw_as .sa_as .b_footnote, #sw_as .sa_as .b_ad .b_adlabel, #sw_as .sa_as .b_adrnd .b_adlabel, #sw_as .sa_as .b_expando .b_subModule, #sw_as .sa_as .b_expando .b_suppModule, #sw_as .sa_as .b_algo .b_vList td, #sw_as .sa_as .b_expando .b_secondaryText, #sw_as .sa_as .b_expando .b_attribution, #sw_as .sa_as .b_expando .b_factrow, #sw_as .sa_as .b_expando .b_footnote, #sw_as .sa_as .ctxtb, #sw_as .sa_as .sa_rmvd {
    color: var(--main-fg-color-soft);
  }
  
  #sw_as li.pp_tile.sa_hv, #sw_as .sa_hv {
    background-color: var(--main-bg-color-dark);
  }
  
  #sw_as .sa_as .sa_drw, #sw_as .sa_as li.pp_tile, #sw_as .sa_as .sa_tm strong, #sw_as .sa_as table {
    color: var(--main-fg-color-bright);
  }
  
  #sw_as .sa_as .sa_drw .sa_sg .sa_tmHS, #sw_as .sa_as .sa_drw .sa_sg div.sa_tmHS strong {
    color: var(--main-fg-color-active);
  }
  
  a, #b_tween a:visited, #b_results .b_no a {
    color: var(--main-fg-color-link);
  }
  
  .b_searchboxForm #sw_as .sa_fd {
    display: none;
    opacity: 0;
    width: 0px;
    max-width: 0px;
    height: 0px;
    max-height: 0px;
  }
  
  .b_top, .b_top .b_promoteText {
    color: var(--main-fg-color-soft);
  }
  
  hr.df_f, hr.df_fn {
    color: var(--main-border-color);
    background-color: var(--main-border-color);
  }
  
  .df_topAlAs .b_module_expansion_control.b_module_head>.b_module_expansion .b_expansion_wrapper {
    border-top: 1px solid var(--main-border-color);
  }
  
  #df_listaa .b_module_expansion .b_expansion_wrapper.b_expand {
    border-color: var(--main-border-color);
  }
  
  #df_listaa .b_module_expansion .b_expansion_text {
    color: var(--main-fg-color-soft);
  }
  
  .df_alsocon {
    color: var(--main-fg-color-dim);
  }
  
  .b_algoTextCarousel .b_slidebar .slide .b_text {
    color: var(--main-fg-color-dim);
  }
  
  div.wpcbc .b_fcv2 tr {
    border-bottom: 1px solid var(--main-border-color);
    border-top: 1px solid var(--main-border-color);
  }
  
  .codeTitle {
    color: var(--main-fg-color-bright);
  }
  
  .preview {
  /*   border: 0; */
    border-top: 1px solid var(--main-border-color);
    border-left: 1px solid var(--main-border-color);
    border-right: 1px solid var(--main-border-color);
  }
  
  .showmorelink {
    background-color: var(--main-bg-color-dark);
    border-bottom: 1px solid var(--main-border-color);
    border-left: 1px solid var(--main-border-color);
    border-right: 1px solid var(--main-border-color);
  }
  
  .showmorelink .btm_sml {
    background-color: var(--main-bg-color-bright);
  }
  
  .cCodeBg {
    background-color: var(--main-bg-color-bright);
  }
  
  .b_tHeader,
  .b_demoteText,
  .b_secondaryText,
  .b_attribution,
  .b_factrow,
  .b_focusLabel,
  .b_footnote,
  .b_ad .b_adlabel,
  .b_adrnd .b_adlabel,
  #b_tween .b_dropdown a,
  .b_expando .b_subModule,
  .b_expando .b_suppModule,
  .b_algo .b_vList td,
  #b_content .b_lowFocusLink a,
  #b_context .b_secondaryText,
  #b_context .b_attribution,
  #b_context .b_factrow,
  #b_context .b_footnote,
  #b_context .b_ad .b_adlabel,
  #b_context .b_adrnd .b_adlabel,
  .b_expando .b_secondaryText,
  .b_expando .b_attribution,
  .b_expando .b_factrow,
  .b_expando .b_footnote {
    color: var(--main-fg-color-dim);
  }
  
  .b_algo .b_factrow {
    color: var(--main-fg-color-dim);
  }
  
  body, 
  .b_promoteText, 
  #b_tween a.ftrH, 
  #b_tween a.ftrH:hover, 
  .b_expando, 
  .b_expando h2, 
  .b_active a, 
  .b_active a:visited, 
  .b_active a:hover, 
  #b_results>.b_pag a, 
  #b_results .b_no, 
  #b_content a.cbl:visited, 
  #b_content a.cbl {
    color: var(--main-fg-color-soft);
  }
  
  #b_results>.b_pag .sb_pagS_bp {
    color: var(--main-fg-color-active);
    font-weight: bold;
    border-color: var(--main-fg-color-active);
  }
  
  .tab-menu li {
    color: var(--main-fg-color-active);
    background-color: var(--main-result-btn-bg);
  }
  
  .b_ad .tab-flex li:hover,
  .b_adrnd .tab-flex li:hover,
  .tab-flex li:hover {
    color: var(--main-fg-color-active);
    background-color: var(--main-result-btn-bg-hover);
    -webkit-box-shadow: inset 0 -3px 0 0 var(--main-fg-color-active);
        -ms-box-shadow: inset 0 -3px 0 0 var(--main-fg-color-active);
            box-shadow: inset 0 -3px 0 0 var(--main-fg-color-active);
  }
  
  .b_ad .tab-flex li.tab-active, 
  .b_adrnd .tab-flex li.tab-active, 
  .tab-flex li.tab-active {
    color: var(--main-result-btn-fg-color-active);
    background-color: var(--main-result-btn-bg-hover);
  }
  
  a.cbtn,
  .cbtn a,
  .cbtn input,
  #b_content a.cbtn,
  #b_content a.cbtn:visited,
  #b_content .cbtn a,
  #b_content .cbtn a:visited {
    color: var(--main-fg-color-active);
    background-color: var(--main-result-btn-bg);
  }
  
  #b_content a.cbtn:hover, 
  #b_content .cbtn a:hover, 
  .cbtn input:hover {
    color: var(--main-fg-color-active);
    background-color: var(--main-result-btn-bg-hover);
    border-color: var(--main-fg-color-active);
  }
  
  a.cbtn, .cbtn a, .cbtn input {
    border-color: var(--main-border-color);
  }
  
  .b_footer, 
  .b_footer a, 
  .b_footer a:visited {
    color: var(--main-fg-color-soft);
  }
  
  .b_footer {
    background-color: var(--main-bg-color);
  }
  
  .df_c .rwrl, #b_results .df_c .b_entityTitle {
    color: var(--main-fg-color-soft);
  }
  
  .b_algo .tab-menu li {
    background-color: var(--main-bg-color) !important;
    color: var(--main-fg-color-soft) !important;
  }
  
  .tab-navr, .tab-navl {
    background-color: var(--main-bg-color);
  }
  
  .tab-navl.tab-disable, .tab-navr.tab-disable {
    background-color: var(--main-bg-color);
  }
  
  .na_cl .na_citem, .na_cl .slide.see_more {
    background-color: var(--main-bg-color);
  }
  
  .na_cnt .citm_spt, #ans_nws .na_cnt .citm_spt, #ans_nws .na_cnt .itm_tlt_snp .itm_spt, #nse_p .na_cnt .itm_tlt_snp .itm_spt {
    color: var(--main-fg-color-soft);
  }
  
  .nws_itm, .nws_itmb {
    background-color: var(--main-bg-color);
  }
  
  .nws_cm .vidr, .nws_cm .twcwr .slide {
    background-color: var(--main-bg-color);
  }
  
  #DeepLinkDD #DeepLinkDD_c {
    border-color: var(--main-fg-color-active);
  }
  
  .ctxt, select, input[type="text"] {
    color: var(--main-fg-color-soft);
  }
  
  #rfPane {
    background-color: var(--main-bg-color);
  }
  
  .dg_b {
    background-color: var(--main-bg-color);
  }
  
  .iuscp {
    background-color: var(--main-bg-color);
    border-color: var(--main-fg-color-active);
  }
  
  span#fltIdtLnk {
    color: var(--main-fg-color-soft);
  }
  
  #b_results>.b_top .b_prominentFocusLabel, #b_results>.b_top .b_topTitle, #b_results>.b_top .b_focusTextExtraSmall, #b_results>.b_top .b_focusTextExtraSmall a, #b_results>.b_top .b_focusTextSmall, #b_results>.b_top .b_focusTextSmall a, #b_results>.b_top .b_focusTextMedium, #b_results>.b_top .b_focusTextMedium a, #b_results>.b_top .b_focusTextLarge, #b_results>.b_top .b_focusTextLarge a {
    color: var(--main-fg-color-soft);
  }
  
  .b_tppActCarousel,
  .b_tppProviders {
    border-color: var(--main-fg-color-active);
  }
  
  .b_tophb .bgtopwh,
  .b_tophb .bgtopgr {
    background-color: var(--main-bg-color);
  }
  
  #b_results>li.b_ans.b_topborder.b_tophb,
  .b_tophb .b_tophbb {
    border-color: transparent;
  }
  
  .b_tophb .b_tophbb {
    border-color: var(--main-bg-color);
  }
  
  .cg_top li.cegl {
    background-color: var(--main-bg-color-dark);
  }
  
  #b_results .cg_top .b_slyGridItem a:hover, #b_results .cg_top .b_slyGridItem a.sel {
    background-color: transparent;
  }
  
  .cg_top li.cegl .b_slyGridItem .b_secondaryFocus {
    color: var(--main-fg-color-soft);
  }
  
  #b_results>li.b_ans.b_topborder .bgtopwh,
  #b_results>li.b_ans.b_topborder .bgtopgr,
  #b_results>li.b_ans.b_topborder {
    border-radius: 0;
    background-color: var(--main-bg-color-dark);
  }
  
  .sp_pssl {
    color: var(--main-fg-color-soft);
  }
  
  .b_mt .b_focusLabel {
    color: var(--main-fg-color-soft);
  }
  
  .b_cnvsug a {
    background-color: var(--main-bg-color-dark);
    border-color: var(--main-border-color);
  }
  
  .b_cnvsug a:hover {
    background-color: var(--main-bg-color);
    border-color: var(--main-border-color);
  }
  
  .b_overlay .btn.rounded .cr>div {
    -webkit-filter: invert(.83);
    filter: invert(.83);
  }
  
  .sw_ddbk:after, .sw_ddw:after, .sw_ddgn:after, .sw_poi:after, .sw_poia:after, .sw_play:after, .sw_playa:after, .sw_playd:after, .sw_playp:after, .sw_st:after, .sw_sth:after, .sw_ste:after, .sw_st2:after, .sw_plus:after, .sw_tpcg:after, .sw_tpcw:after, .sw_tpcbk:after, .sw_arwh:after, .sb_pagN:after, .sb_pagP:after, .sw_up:after, .sw_down:after, .b_expandToggle:after, .sw_calc:after, .sw_fbi:after, .sw_twi:after, .b_fLogo:after, .b_cm:after, .sw_rmore:after, .sw_tpo:after, .sw_tpoa:after, .sw_lpoi:after, .sw_skp:after {
    -webkit-filter: invert(.83);
    filter: invert(.83);
  }
  
  #b_results>.b_pag .sb_pagS_bp:hover {
    background-color: var(--main-bg-color-dark);
  }
  
  #sw_as li.pp_tile {
    border-color: var(--main-border-color);
  }
  
  .b_scopebar .b_active a, .b_scopebar a:hover, .id_button:hover {
    color: var(--main-fg-color-dim);
  }
  
  .b_scopebar li:hover:not(.b_active) {
    border-color: var(--main-border-color);
  }
  
  .b_icRatings .cbl {
    color: var(--main-fg-color-soft);
  }
  
  .lightcar .carouselChevRightSvg {
    -webkit-filter: invert(.1);
    filter: invert(.1);
  }
  
  /* .carousel .lightcar .nav_left, .carousel .lightcar .nav_right {
    -webkit-filter: invert(1);
    filter: invert(1);
  } */
  
  .lightcar .nav_container:hover .carouselChevRightSvg {
    -webkit-filter: invert(1);
    filter: invert(1);
  }
  
  .carousel .lightcar .nav_container:hover>span {
    width: 48px;
    height: 48px;
    margin: 4px;
    box-shadow: 0 8px 6px 2px rgba(0,0,0,.25);
    -webkit-box-shadow: 0 8px 6px 2px rgba(0,0,0,.25);
  }
  
  .tw_label, .ans_nws .news_fc_hint {
    color: var(--main-fg-color-soft);
  }
  
  .b_block_expansion .b_onpage_expansion {
    color: var(--main-fg-color-link);
  }
  
  .b_block_expansion .b_onpage_expansion .sv_ch {
    fill: var(--main-fg-color-link);
  }
  
  .eplist_item .name, .eplist_item .noname {
    color: var(--main-fg-color-soft);
  }
  
  #mmvdp {
    background-color: var(--main-bg-color);
  }
  
  .mm_vdcv_label h2 {
    border-color: var(--main-border-color);
  }
  
  .mc_vtvc {
    background-color: var(--main-bg-color-dark);
  }
  
  .mc_vtvc_title {
    color: var(--main-fg-color-soft);
  }
  
  .mc_vtvc_meta_block, .mc_vtvc_meta_block a {
    color: var(--main-fg-color-soft);
  }
  
  .blue2#miniheader #sb_form_go {
    background-color: var(--main-bg-color-dark);
    border-color: var(--main-bg-color-dark);
  }
  
  .touchQuery .carousel .carousel-controls, .touchQuery .carousel .items, .touchQuery .carousel .item, .touchQuery .carousel .carousel-controls .nav_left, .touchQuery .carousel .carousel-controls .nav_right {
    background-color: var(--main-bg-color-dark);
  }
  
  #b_header .b_scopebar #fltIdtCon {
    background-color: var(--main-bg-color);
  }
  
  #fltIdtCon:before {
    display: none;
  }
  
  .ftrP11 {
    color: var(--main-fg-color-soft);
  }
  
  .ftrBRF .ftrSSL {
    color: var(--main-fg-color-soft);
  }
  
  #miniheader table {
    background-color: var(--main-bg-color);
  }
  
  .inline_tile .carousel .item .card .tit {
    color: var(--main-fg-color-soft);
  }
  
  .inline_tile .carousel .item .card {
    background-color: var(--main-bg-color);
    outline: none;
  }
  
  #bop_container.fade:before {
    background: linear-gradient(transparent, var(--main-bg-color));
  }
  
  #sw_as .sa_drw {
    background-color: var(--main-bg-color);
  }
  
  #sw_as .sa_hv .sa_tm,
  .sa_hv {
    text-decoration: none;
  }
  
  .dc_mn {
    color: var(--main-fg-color-soft);
  }
  
  .dc_st {
    color: var(--main-fg-color-soft);
  }
  
  .dc_prn {
    color: var(--main-fg-color-dim);
  }
  
  #b_results .b_ans:not(.b_top):not(.b_topborder) :not(.b_entityTP) .btm_sml .b_mopexpref .expansionDefaultText, #b_results .b_ans:not(.b_top):not(.b_topborder) :not(.b_entityTP) .btm_sml .b_mopexpref .expansionCustomizedText, #b_results .b_ans.b_mop .btm_sml .b_mopexpref .expansionDefaultText, #b_results .b_ans.b_mop .btm_sml .b_mopexpref .expansionCustomizedText {
    color: var(--main-fg-color-link);
  }
  
  #rdans .rd_postbody {
    color: var(--main-fg-color-dim);
  }
  
  #rdans .rd_commentbody {
    color: var(--main-fg-color-soft);
  }
  
  #tabcontrol_16_61818B_menu > li {
    background-color: var(--main-bg-color);
    color: var(--main-fg-color-soft);
  }
  
  #b_results ::placeholder {
    color: var(--main-fg-color-dim);
  }
  
  .b_scopebar, .b_scopebar a, .b_scopebar a:visited, .id_button, .id_button:visited {
    color: var(--main-fg-color-soft);
  }
  
  /*
    Videos of Tile.
  */
  .vidr .b_factrow {
    color: var(--main-fg-color-dim) !important;
  }
  
  
  /*
    Search results table.
  */
  .b_vList .tabcap table tr,
  .b_vList .tabcap table tr th {
    border-color: var(--main-border-color);
  }
  
  .b_vList .tabcap table tr th {
    color: var(--main-fg-color-soft);
  }
  
  /*
    TV shows banner.
  */
  body #b_pole .b_poleContent {
    background: transparent;
    border-color: var(--main-border-color);
  }
  
  #pole .carousel, #bopblock .carousel, #b_pole .heroLyricsPole, #ent-car-exp.carousel, #ent-car-exp-img.carousel, #b_pole .b_poleContent .heroCom, #b_pole .b_poleContent .btm_sml {
    background: var(--main-bg-color-dark);
    color: var(--main-fg-color-soft);
  }
  
  .carousel, .carousel a {
    color: var(--main-fg-color-soft);
  }
  
  .carousel .lightcar .item .card {
    background: var(--main-bg-color);
  }
  
  .carousel .lightcar .item .card .rat, .carousel .lightcar .item .card .subtit, .carousel .lightcar .item .card .tags {
    color: var(--main-fg-color-soft);
  }
  
  .carousel .lightcar .item .card:hover, .carousel .lightcar .item .card-hover, .carousel .lightcar .item.sel .card:hover, .carousel .lightcar .item.sel .card-hover {
    background: var(--main-bg-color-dark);
  }
  
  /*
    Reddit result tile.
  */
  #rdmopans hr.df_top,
  #rdmopans hr.df_bot {
    background-color: var(--main-border-color);
  }
  
  #rdmopans .rdmop_postmetadata,
  #rdmopans .rdmop_postcaption,
  #rdmopans .rdmop_commentbody,
  #rdcans .rdmop_postmetadata,
  #rdcans .rdc_commentbody,
  #rdcans .rdc_postcaption {
    color: var(--main-fg-color-soft);
  }
  
  #rdmopans .rdmop_commentmetadata,
  #rdcans .rdmop_commentmetadata {
    color: var(--main-fg-color-dim);
  }
  
  #rdmopans .rdmop_readmoretext,
  #rdcans .rdmop_readmoretext {
    color: var(--main-fg-color-link);
  }
  
  /*
    Search results side column.
  */
  .eplist_item>a>.name, .eplist_item .b_ep_caption>a>.name {
    color: var(--main-fg-color-link);
  }
  
  .eplist_item .subtitle {
    color: var(--main-fg-color-soft);
  }
  
  #b_context .b_ans:not(:last-child) {
    border-color: var(--main-border-color);
  }
  
  .eplist_module .b_vPanel>div {
    border-color: var(--main-border-color);
  }
  
  /*
    Hamburger menu overlay dropdown.
  */
  .hb_section:focus {
    background: var(--main-bg-color-dark);
  }
  
  /*
    'Make Bing your search engine' button.
  */
  #b_opalpers .b_op_flyout {
    background: var(--main-bg-color-dark);
    border-color: var(--main-border-color);
  }
  
  #b_opalpers a {
    color: var(--main-fg-color-soft);
  }
  
  /*
    'Get the new Microsoft Edge' button.
  */
  #b_opalpers[data-flyout="Anaheim"] a {
    display: none !important;
  }
  
  /*
    Rewards flyout.
  */
  #sp_requery,
  #sp_recourse {
    color: var(--main-fg-color-soft);
  }
  
  .b_idOpen a#id_l, a#id_rh.openfo {
    background-color: var(--main-bg-color);
  }
  
  #flyoutContent #goal,
  #flyoutContent #cards .cardBody,
  #bepfo, #id_d {
    background-color: var(--main-bg-color-dark);
  }
  
  #flyoutContent #header .title,
  #flyoutContent #goal a .title,
  #flyoutContent #goal .cardFooter a,
  #flyoutContent,
  #flyoutContent #credits,
  #flyoutContent #cards .cardHeader,
  #flyoutContent .cardItem .title,
  #flyoutContent #cards .cardHeader a {
    color: var(--main-fg-color-soft);
  }
  
  #flyoutContent .cardItem,
  #flyoutContent #cards .cardHeader,
  #flyoutContent #credits {
    border-color: var(--main-border-color);
  }
  
  
  /*
    Ads
  */
  
  /* .b_ad.b_adBottom */
  .b_ad {
    /*  Gets detected and a new add element without a class gets inserted.  */
    /*   display:none; */
  
    /*  Gets detected and a new add element without a class gets inserted.  */
    /*   opacity: 0;
    max-height: 0;
    padding: 0 !important; */
  
    /* Seems fine so far */
    position: absolute;
    transform: translateX(-9999px);
  }
  
  /* 
    Scrollbar 
  */
  ::-webkit-scrollbar {
    background-color: rgba(50, 50, 50, 0.3);
  }
  
  ::-webkit-scrollbar:horizontal {
    height: 8px;
    background-color: rgba(50, 50, 50, 0.3);
  }
  
  ::-webkit-scrollbar:vertical {
    width: 8px;
    background-color: rgba(50, 50, 50, 0.3);
  }
  
  ::-webkit-scrollbar-track {
    background: var(--main-bg-color);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgb(203, 175, 248, 0.4);
  }
  
  /*
    Hide the round search
  */
  #mfa_actions {
    display: none;
  }
  
  /*
    Hide feedback circle
  */
  .feedback-binded {
    display: none !important;
  }

  /*
    Hide download new Microsoft Edge footer
  */
  #b_notificationContainer_bop {
    display: none !important;
  }
  `

const styles = document.createElement('style')
styles.id = 'mb-styles--mb-bing-dark'
styles.classList.add('mb-styles')
styles.type = 'text/css'
styles.innerHTML = css
document.querySelector('html').appendChild(styles)

})()
