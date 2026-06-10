import React, { useState, useMemo, useEffect } from 'react';
import {
    Footer,
} from "./styled";

// Массив данных с полями hp (мощность) и torque (момент)
const ENGINE_DATA = [
    { "engine": "CPNB", "ring": "87", "min": "0", "max": "12", "hp": "240 л.с.", "torque": "580 Нм" },
    { "engine": "CSUA", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "CSUB", "ring": "10", "min": "0", "max": "18", "hp": "136 л.с.", "torque": "320 Нм" },
    { "engine": "CTBA", "ring": "87", "min": "0", "max": "12", "hp": "258 л.с.", "torque": "580 Нм" },
    { "engine": "CTBC", "ring": "84", "min": "0", "max": "12", "hp": "250 л.с.", "torque": "550 Нм" },
    { "engine": "CVUB", "ring": "87", "min": "0", "max": "12", "hp": "313 л.с.", "torque": "650 Нм" },
    { "engine": "CVUC", "ring": "87", "min": "0", "max": "12", "hp": "313 л.с.", "torque": "650 Нм" },
    { "engine": "DEHA", "ring": "87", "min": "0", "max": "12", "hp": "340 л. с.", "torque": "700 Нм" },
    { "engine": "DJPB", "ring": "110", "min": "0", "max": "21", "hp": "600 л.с.", "torque": "800 Нм" },
    { "engine": "DKMB", "ring": "76", "min": "0", "max": "14", "hp": "450 л.с.", "torque": "600 Нм" },
    { "engine": "DKNA", "ring": "60", "min": "0", "max": "16", "hp": "245 л.с.", "torque": "370 Нм" },
    { "engine": "DKUA", "ring": "", "min": "0", "max": "", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "DKWB", "ring": "", "min": "0", "max": "", "hp": "245 л.с.", "torque": "370 Нм" },
    { "engine": "DKWC", "ring": "", "min": "0", "max": "", "hp": "245 л.с.", "torque": "370 Нм" },
    { "engine": "DKYA", "ring": "60", "min": "0", "max": "16", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "DLGA", "ring": "60", "min": "0", "max": "16", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "DLHA", "ring": "60", "min": "0", "max": "16", "hp": "204 л.с.", "torque": "320 Нм" },
    { "engine": "DLHB", "ring": "60", "min": "0", "max": "16", "hp": "204 л.с.", "torque": "320 Нм" },
    { "engine": "DLHC", "ring": "60", "min": "0", "max": "16", "hp": "204 л.с.", "torque": "320 Нм" },
    { "engine": "DLZA", "ring": "76", "min": "0", "max": "14", "hp": "340 л.с.", "torque": "500 Нм" },
    { "engine": "DMTA", "ring": "58", "min": "0", "max": "18", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "DMTC", "ring": "58", "min": "0", "max": "18", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "DPAA", "ring": "58", "min": "0", "max": "18", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "DPMA", "ring": "", "min": "0", "max": "", "hp": "150 л.с.", "torque": "360 Нм" },
    { "engine": "DPJB", "ring": "110", "min": "0", "max": "21", "hp": "600 л.с.", "torque": "800 Нм" },
    { "engine": "DRYA", "ring": "58", "min": "0", "max": "18", "hp": "286 л.с.", "torque": "600 Нм" },
    { "engine": "CVMD", "ring": "99", "min": "0", "max": "13", "hp": "249 л.с.", "torque": "600 Нм" },
    { "engine": "DDVB", "ring": "99", "min": "0", "max": "13", "hp": "286 л.с.", "torque": "620 Нм" },
    { "engine": "CAEB", "ring": "39", "min": "0", "max": "24", "hp": "211 л.с.", "torque": "350 Нм" },
    { "engine": "CALB", "ring": "132", "min": "0", "max": "13", "hp": "270 л.с.", "torque": "320 Нм" },
    { "engine": "CDNB", "ring": "39", "min": "0", "max": "24", "hp": "180 л.с.", "torque": "320 Нм" },
    { "engine": "CDNC", "ring": "39", "min": "0", "max": "24", "hp": "211 л.с.", "torque": "350 Нм" },
    { "engine": "CHJA", "ring": "39", "min": "0", "max": "24", "hp": "245 л.с.", "torque": "480 Нм" },
    { "engine": "CPMA", "ring": "32", "min": "0", "max": "27", "hp": "211 л.с.", "torque": "350 Нм" },
    { "engine": "CPMB", "ring": "32", "min": "0", "max": "27", "hp": "220 л.с.", "torque": "350 Нм" },
    { "engine": "CTUC", "ring": "132", "min": "0", "max": "13", "hp": "272 л.с.", "torque": "400 Нм" },
    { "engine": "CTUD", "ring": "132", "min": "0", "max": "13", "hp": "310 л.с.", "torque": "440 Нм" },
    { "engine": "CTVA", "ring": "132", "min": "0", "max": "13", "hp": "245 л.с.", "torque": "440 Нм" },
    { "engine": "CTXA", "ring": "132", "min": "0", "max": "13", "hp": "310 л.с.", "torque": "440 Нм" },
    { "engine": "DDVE", "ring": "99", "min": "0", "max": "13", "hp": "249 л.с.", "torque": "600 Нм" },
    { "engine": "DDVF", "ring": "99", "min": "0", "max": "13", "hp": "211 л.с.", "torque": "500 Нм" },
    { "engine": "DESA", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "DEWA", "ring": "126", "min": "0", "max": "13", "hp": "354 л.с.", "torque": "500 Нм" },
    { "engine": "DEZD", "ring": "36", "min": "0", "max": "18", "hp": "163 л.с.", "torque": "370 Нм" },
    { "engine": "DEZF", "ring": "36", "min": "0", "max": "18", "hp": "136 л.с.", "torque": "370 Нм" },
    { "engine": "DFBA", "ring": "36", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "360 Нм" },
    { "engine": "DMGA", "ring": "44", "min": "0", "max": "13", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "DMGH", "ring": "44", "min": "0", "max": "13", "hp": "204 л.с.", "torque": "320 Нм" },
    { "engine": "DMKD", "ring": "116", "min": "0", "max": "13", "hp": "341 л.с.", "torque": "700 Нм" },
    { "engine": "DTPA", "ring": "36", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "360 Нм" },
    { "engine": "DTPB", "ring": "39", "min": "0", "max": "18", "hp": "122 л.с.", "torque": "300 Нм" },
    { "engine": "CWWB", "ring": "110", "min": "0", "max": "21", "hp": "354 л.с.", "torque": "500 Нм" },
    { "engine": "CXYA", "ring": "110", "min": "0", "max": "21", "hp": "460 л.с.", "torque": "600 Нм" },
    { "engine": "CZSA", "ring": "76", "min": "0", "max": "14", "hp": "340 л.с.", "torque": "500 Нм" },
    { "engine": "CZSE", "ring": "76", "min": "0", "max": "14", "hp": "340 л.с.", "torque": "500 Нм" },
    { "engine": "CVXB", "ring": "174", "min": "0", "max": "11", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "DDVC", "ring": "99", "min": "0", "max": "13", "hp": "286 л.с.", "torque": "620 Нм" },
    { "engine": "DMGK", "ring": "44", "min": "0", "max": "13", "hp": "204 л.с.", "torque": "320 Нм" },
    { "engine": "CYGA", "ring": "32", "min": "0", "max": "27", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "CYNB", "ring": "32", "min": "0", "max": "27", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "CYPA", "ring": "32", "min": "0", "max": "27", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "CYPB", "ring": "32", "min": "0", "max": "27", "hp": "249 л.с.", "torque": "370 Нм" },
    { "engine": "CDSB", "ring": "186", "min": "0", "max": "13", "hp": "350 л.с.", "torque": "800 Нм" },
    { "engine": "CDTA", "ring": "До 2011: 83", "min": "0", "max": "До 2011: 16", "hp": "250 л.с.", "torque": "550 Нм" },
    { "engine": "CDTB", "ring": "До 2011: 83", "min": "0", "max": "До 2011: 16", "hp": "211 л.с.", "torque": "550 Нм" },
    { "engine": "CDTC", "ring": "87", "min": "0", "max": "12", "hp": "250 л.с.", "torque": "550 Нм" },
    { "engine": "CLAB", "ring": "87", "min": "0", "max": "12", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "CMHA", "ring": "87", "min": "0", "max": "12", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "CTUB", "ring": "132", "min": "0", "max": "13", "hp": "333 л.с.", "torque": "440 Нм" },
    { "engine": "CVBA", "ring": "123", "min": "0", "max": "22", "hp": "320 л.с.", "torque": "450 Нм" },
    { "engine": "DDTA", "ring": "185", "min": "0", "max": "21", "hp": "326 л.с.", "torque": "650 Нм" },
    { "engine": "CMDA", "ring": "123", "min": "0", "max": "22", "hp": "310 л.с.", "torque": "440 Нм" },
    { "engine": "CPAA", "ring": "123", "min": "0", "max": "22", "hp": "300 л.с.", "torque": "440 Нм" },
    { "engine": "CREA", "ring": "141", "min": "0", "max": "11", "hp": "272 л.с.", "torque": "400 Нм" },
    { "engine": "CREC", "ring": "141", "min": "0", "max": "11", "hp": "333 л.с.", "torque": "440 Нм" },
    { "engine": "CREG", "ring": "141", "min": "0", "max": "11", "hp": "290 л.с.", "torque": "440 Нм" },
    { "engine": "CTDA", "ring": "141", "min": "0", "max": "11", "hp": "333 л.с.", "torque": "440 Нм" },
    { "engine": "CTFA", "ring": "185", "min": "0", "max": "24", "hp": "435 л.с.", "torque": "600 Нм" },
    { "engine": "CTGA", "ring": "185", "min": "0", "max": "24", "hp": "440 л.с.", "torque": "600 Нм" },
    { "engine": "CTGF", "ring": "185", "min": "0", "max": "24", "hp": "450 л.с.", "torque": "600 Нм" },
    { "engine": "CTNA", "ring": "", "min": "0", "max": "", "hp": "333 л.с.", "torque": "440 Нм" },
    { "engine": "CVJA", "ring": "60", "min": "0", "max": "16", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "CYMC", "ring": "60", "min": "0", "max": "16", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "CYRB", "ring": "60", "min": "0", "max": "16", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "DCBD", "ring": "76", "min": "0", "max": "14", "hp": "340 л.с.", "torque": "500 Нм" },
    { "engine": "DCBE", "ring": "76", "min": "0", "max": "14", "hp": "340 л.с.", "torque": "500 Нм" },
    { "engine": "DEUB", "ring": "13", "min": "0", "max": "18", "hp": "136 л.с.", "torque": "320 Нм" },
    { "engine": "DEUC", "ring": "13", "min": "0", "max": "18", "hp": "122 л.с.", "torque": "320 Нм" },
    { "engine": "DEWB", "ring": "123", "min": "0", "max": "13", "hp": "354 л.с.", "torque": "500 Нм" },
    { "engine": "DEZB", "ring": "36", "min": "0", "max": "18", "hp": "163 л.с.", "torque": "370 Нм" },
    { "engine": "DEZE", "ring": "36", "min": "0", "max": "18", "hp": "163 л.с.", "torque": "370 Нм" },
    { "engine": "DFVA", "ring": "13", "min": "0", "max": "18", "hp": "190 л.с.", "torque": "400 Нм" },
    { "engine": "DMKC", "ring": "", "min": "0", "max": "", "hp": "286 л.с.", "torque": "600 Нм" },
    { "engine": "DTNA", "ring": "36", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "DCUE", "ring": "110", "min": "0", "max": "21", "hp": "600 л.с.", "torque": "800 Нм" },
    { "engine": "DMFA", "ring": "60", "min": "0", "max": "16", "hp": "265 л.с.", "torque": "370 Нм" },
    { "engine": "DMFB", "ring": "60", "min": "0", "max": "16", "hp": "265 л.с.", "torque": "370 Нм" },
    { "engine": "DNEA", "ring": "60", "min": "0", "max": "16", "hp": "265 л.с.", "torque": "370 Нм" },
    { "engine": "CRTC", "ring": "99", "min": "0", "max": "13", "hp": "272 л.с.", "torque": "600 Нм" },
    { "engine": "CRTE", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "500 Нм" },
    { "engine": "CUEA", "ring": "99", "min": "0", "max": "13", "hp": "272 л.с.", "torque": "600 Нм" },
    { "engine": "CVZA", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "500 Нм" },
    { "engine": "CZAA", "ring": "174", "min": "0", "max": "11", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "CZAC", "ring": "174", "min": "0", "max": "11", "hp": "252 л.с.", "torque": "370 Нм" },
    { "engine": "CZZA", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "500 Нм" },
    { "engine": "CDRA", "ring": "168", "min": "0", "max": "20", "hp": "372 л.с.", "torque": "445 Нм" },
    { "engine": "CEUA", "ring": "185", "min": "0", "max": "21", "hp": "420 л.с.", "torque": "550 Нм" },
    { "engine": "CGTA", "ring": "185", "min": "0", "max": "21", "hp": "420 л.с.", "torque": "550 Нм" },
    { "engine": "CGWA", "ring": "132", "min": "0", "max": "13", "hp": "290 л.с.", "torque": "420 Нм" },
    { "engine": "CGWD", "ring": "132", "min": "0", "max": "13", "hp": "310 л.с.", "torque": "440 Нм" },
    { "engine": "CGXC", "ring": "132", "min": "0", "max": "13", "hp": "333 л.с.", "torque": "440 Нм" },
    { "engine": "CSUE", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "CTCB", "ring": "87", "min": "0", "max": "12", "hp": "211 л.с.", "torque": "500 Нм" },
    { "engine": "CTCC", "ring": "87", "min": "0", "max": "12", "hp": "218 л.с.", "torque": "400 Нм" },
    { "engine": "CVUA", "ring": "87", "min": "0", "max": "12", "hp": "320 л.с.", "torque": "650 Нм" },
    { "engine": "CZJA", "ring": "10", "min": "0", "max": "18", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "CZVA", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "500 Нм" },
    { "engine": "CZVB", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "500 Нм" },
    { "engine": "CZVC", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "500 Нм" },
    { "engine": "CZVD", "ring": "99", "min": "0", "max": "13", "hp": "211 л.с.", "torque": "500 Нм" },
    { "engine": "CZVF", "ring": "99", "min": "0", "max": "13", "hp": "190 л.с.", "torque": "500 Нм" },
    { "engine": "DDCA", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "DDCB", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "DDDA", "ring": "10", "min": "0", "max": "18", "hp": "190 л.с.", "torque": "400 Нм" },
    { "engine": "CDUC", "ring": "83", "min": "0", "max": "16", "hp": "245 л.с.", "torque": "500 Нм" },
    { "engine": "CDUD", "ring": "83", "min": "0", "max": "16", "hp": "245 л.с.", "torque": "580 Нм" },
    { "engine": "CGLC", "ring": "46", "min": "0", "max": "24", "hp": "177 л.с.", "torque": "380 Нм" },
    { "engine": "CHLD", "ring": "46", "min": "0", "max": "24", "hp": "136 л.с.", "torque": "320 Нм" },
    { "engine": "CGLE", "ring": "46", "min": "0", "max": "24", "hp": "136 л.с.", "torque": "320 Нм" },
    { "engine": "CGQB", "ring": "87", "min": "0", "max": "12", "hp": "313 л.с.", "torque": "650 Нм" },
    { "engine": "CKVB", "ring": "87", "min": "0", "max": "12", "hp": "245 л.с.", "torque": "550 Нм" },
    { "engine": "CKVC", "ring": "87", "min": "0", "max": "12", "hp": "245 л.с.", "torque": "580 Нм" },
    { "engine": "CLAA", "ring": "87", "min": "0", "max": "12", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "CMGB", "ring": "46", "min": "0", "max": "24", "hp": "177 л.с.", "torque": "380 Нм" },
    { "engine": "CNHA", "ring": "10", "min": "0", "max": "18", "hp": "190 л.с.", "torque": "400 Нм" },
    { "engine": "CRTD", "ring": "99", "min": "0", "max": "13", "hp": "272 л.с.", "torque": "600 Нм" },
    { "engine": "CRTF", "ring": "99", "min": "0", "max": "13", "hp": "211 л.с.", "torque": "500 Нм" },
    { "engine": "CSUD", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "CAGA", "ring": "46", "min": "0", "max": "24", "hp": "143 л.с.", "torque": "320 Нм" },
    { "engine": "CAGB", "ring": "46", "min": "0", "max": "24", "hp": "120 л.с.", "torque": "290 Нм" },
    { "engine": "CAHA", "ring": "46", "min": "0", "max": "24", "hp": "170 л.с.", "torque": "350 Нм" },
    { "engine": "CAHB", "ring": "46", "min": "0", "max": "24", "hp": "163 л.с.", "torque": "340 Нм" },
    { "engine": "CCWA", "ring": "32", "min": "0", "max": "16", "hp": "240 л.с.", "torque": "500 Нм" },
    { "engine": "CCWB", "ring": "32", "min": "0", "max": "16", "hp": "211 л.с.", "torque": "500 Нм" },
    { "engine": "CGLA", "ring": "46", "min": "0", "max": "24", "hp": "163 л.с.", "torque": "380 Нм" },
    { "engine": "CGLB", "ring": "46", "min": "0", "max": "24", "hp": "170 л.с.", "torque": "350 Нм" },
    { "engine": "CGLD", "ring": "46", "min": "0", "max": "24", "hp": "163 л.с.", "torque": "380 Нм" },
    { "engine": "CJCA", "ring": "46", "min": "0", "max": "24", "hp": "143 л.с.", "torque": "320 Нм" },
    { "engine": "CJCB", "ring": "46", "min": "0", "max": "24", "hp": "136 л.с.", "torque": "320 Нм" },
    { "engine": "CJCD", "ring": "46", "min": "0", "max": "24", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "CMGA", "ring": "46", "min": "0", "max": "24", "hp": "177 л.с.", "torque": "380 Нм" },
    { "engine": "CNHC", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "CVKB", "ring": "60", "min": "0", "max": "16", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "CVKC", "ring": "60", "min": "0", "max": "16", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "CVLA", "ring": "55", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "270 Нм" },
    { "engine": "CVNA", "ring": "31", "min": "0", "max": "22", "hp": "150 л.с.", "torque": "250 Нм" },
    { "engine": "CWGD", "ring": "76", "min": "0", "max": "16", "hp": "354 л.с.", "torque": "500 Нм" },
    { "engine": "CYRC", "ring": "60", "min": "0", "max": "16", "hp": "249 л.с.", "torque": "370 Нм" },
    { "engine": "DBPA", "ring": "60", "min": "0", "max": "16", "hp": "150 л.с.", "torque": "270 Нм" },
    { "engine": "DDWA", "ring": "60", "min": "0", "max": "16", "hp": "150 л.с.", "torque": "270 Нм" },
    { "engine": "DDWB", "ring": "60", "min": "0", "max": "16", "hp": "249 л.с.", "torque": "370 Нм" },
    { "engine": "DECA", "ring": "76", "min": "0", "max": "14", "hp": "450 л.с.", "torque": "600 Нм" },
    { "engine": "DEMA", "ring": "60", "min": "0", "max": "16", "hp": "190 л.с.", "torque": "320 Нм" },
    { "engine": "DHDA", "ring": "60", "min": "0", "max": "16", "hp": "150 л.с.", "torque": "250 Нм" },
    { "engine": "DLVA", "ring": "60", "min": "0", "max": "16", "hp": "204 л.с.", "torque": "320 Нм" },
    { "engine": "DLVB", "ring": "60", "min": "0", "max": "16", "hp": "150 л.с.", "torque": "270 Нм" },
    { "engine": "DMSA", "ring": "58", "min": "0", "max": "18", "hp": "204 л.с.", "torque": "400 Нм" },
    { "engine": "DMSB", "ring": "58", "min": "0", "max": "18", "hp": "163 л.с.", "torque": "370 Нм" },
    { "engine": "DRXA", "ring": "60", "min": "0", "max": "16", "hp": "150 л.с.", "torque": "270 Нм" },
    { "engine": "CSWB", "ring": "99", "min": "0", "max": "13", "hp": "218 л.с.", "torque": "400 Нм" },
    { "engine": "CZHA", "ring": "13", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "250 Нм" },
    { "engine": "DCPC", "ring": "99", "min": "0", "max": "13", "hp": "286 л.с.", "torque": "620 Нм" },
    { "engine": "DCPE", "ring": "99", "min": "0", "max": "13", "hp": "340 л.с.", "torque": "450 Нм" },
    { "engine": "DETA", "ring": "13", "min": "0", "max": "18", "hp": "190 л.с.", "torque": "400 Нм" },
    { "engine": "DETB", "ring": "13", "min": "0", "max": "18", "hp": "163 л.с.", "torque": "400 Нм" },
    { "engine": "DEUA", "ring": "10", "min": "0", "max": "18", "hp": "150 л.с.", "torque": "320 Нм" },
    { "engine": "DTNB", "ring": "36", "min": "0", "max": "18", "hp": "122 л.с.", "torque": "300 Нм" }
];

export default function OilDipstickLookup() {
    const [search, setSearch] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Слушатель прокрутки для кнопки "Наверх"
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Функция плавного скролла наверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Фильтрация данных по коду ДВС
    const filteredData = useMemo(() => {
        const query = search.trim().toUpperCase();
        if (!query) return ENGINE_DATA;
        return ENGINE_DATA.filter(item =>
            item.engine.toUpperCase().includes(query)
        );
    }, [search]);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Значения сервисного щупа Audi</h1>
                <p style={styles.subtitle}>Регулировка установочного кольца T40178</p>
            </header>

            <div style={styles.searchWrapper}>
                <input
                    type="text"
                    inputMode="text"
                    autoCapitalize="characters"
                    placeholder="Введите код двигателя (CAEB)..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.searchInput}
                />
                {search && (
                    <button onClick={() => setSearch('')} style={styles.clearButton}>
                        ✕
                    </button>
                )}
            </div>

            <div style={styles.metaInfo}>
                Найдено модификаций: <strong>{filteredData.length}</strong>
            </div>

            <div style={styles.cardContainer}>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.cardHeader}>
                                <div style={styles.headerTitleRow}>
                                    <span style={styles.engineLabel}>ДВС</span>
                                    <span style={styles.engineCode}>{item.engine}</span>
                                </div>
                                {/* Блок технических характеристик мотора */}
                                {(item.hp || item.torque) && (
                                    <div style={styles.specsWrapper}>
                                        {item.hp && <span style={styles.specBadge}>{item.hp}</span>}
                                        {item.torque && <span style={styles.specBadge}>{item.torque}</span>}
                                    </div>
                                )}
                            </div>

                            <div style={styles.cardBody}>
                                <div style={styles.paramRow}>
                                    <span style={styles.paramLabel}>Кольцо (Щуп):</span>
                                    <span style={styles.paramValueHighlight}>
                                        {item.ring || '—'}
                                    </span>
                                </div>

                                <div style={styles.limitsGrid}>
                                    <div style={styles.limitBox}>
                                        <span style={styles.limitLabel}>MIN</span>
                                        <span style={styles.limitValue}>{item.min}</span>
                                    </div>
                                    <div style={styles.limitBox}>
                                        <span style={styles.limitLabel}>MAX</span>
                                        <span style={styles.limitValue}>{item.max || '—'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={styles.noResults}>
                        Двигатель с кодом "{search}" не найден
                    </div>
                )}
            </div>

            <Footer>
                По всем вопросам и предложениям:
                <a href="https://t.me/aaliaksei" target="_blank" rel="noreferrer">@aaliaksei</a>
            </Footer>

            {/* Кнопка "Наверх" */}
            <button
                onClick={scrollToTop}
                style={{
                    ...styles.scrollTopButton,
                    opacity: showScrollTop ? 1 : 0,
                    pointerEvents: showScrollTop ? 'auto' : 'none',
                    transform: showScrollTop ? 'translateY(0)' : 'translateY(10px)'
                }}
                aria-label="Наверх"
            >
                ↑
            </button>
        </div>
    );
}

// Изменения и адаптивные Mobile-first стили
const styles = {
    container: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: '#f4f6f9',
        color: '#333',
        minHeight: '100vh',
        padding: '12px 12px 40px 12px', // Оптимизированы боковые отступы на смартфонах
        boxSizing: 'border-box',
        position: 'relative',
    },
    header: {
        marginBottom: '16px',
        textAlign: 'center',
    },
    title: {
        fontSize: '19px', // Чуть уменьшен для предотвращения переносов длинных слов на мелких экранах
        fontWeight: '700',
        color: '#1a1a1a',
        margin: '0 0 4px 0',
        lineHeight: '1.2',
    },
    subtitle: {
        fontSize: '12px',
        color: '#666',
        margin: 0,
    },
    searchWrapper: {
        position: 'relative',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        width: '100%',
        padding: '14px 44px 14px 16px', // Место под увеличенную тач-зону крестика
        fontSize: '16px', // 16px предотвращает авто-зум страницы в iOS при фокусе
        borderRadius: '12px',
        border: '1px solid #dcdcdc',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
        WebkitAppearance: 'none',
    },
    clearButton: {
        position: 'absolute',
        right: '4px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        color: '#999',
        cursor: 'pointer',
        padding: '12px', // Увеличена область нажатия (мин. 44x44px по гайдлайнам)
    },
    metaInfo: {
        fontSize: '12px',
        color: '#777',
        marginBottom: '12px',
        paddingLeft: '4px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '14px',
        padding: '14px', // Чуть компактнее на мобильных
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.04)',
        border: '1px solid #edf0f4',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #f0f2f5',
        paddingBottom: '10px',
        marginBottom: '10px',
    },
    headerTitleRow: {
        display: 'flex',
        alignItems: 'baseline',
    },
    engineLabel: {
        fontSize: '11px',
        fontWeight: '600',
        color: '#9e9e9e',
        textTransform: 'uppercase',
        marginRight: '8px',
        letterSpacing: '0.5px',
    },
    engineCode: {
        fontSize: '22px', // Выделено крупнее
        fontWeight: '700',
        color: '#0052cc',
        letterSpacing: '0.5px',
    },
    specsWrapper: {
        display: 'flex',
        flexWrap: 'wrap', // Безопасный перенос характеристик, если экран очень узкий
        gap: '6px',
        marginTop: '6px',
    },
    specBadge: {
        fontSize: '11px',
        fontWeight: '500',
        backgroundColor: '#f0f4f8',
        color: '#475569',
        padding: '3px 8px',
        borderRadius: '6px',
        border: '1px solid #e2e8f0',
        whiteSpace: 'nowrap',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    paramRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        padding: '10px 12px',
        borderRadius: '8px',
    },
    paramLabel: {
        fontSize: '14px',
        color: '#4a5568',
    },
    paramValueHighlight: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1a202c',
        backgroundColor: '#e2e8f0',
        padding: '4px 12px',
        borderRadius: '6px',
        minWidth: '40px',
        textAlign: 'center',
    },
    limitsGrid: {
        display: 'flex', // Вместо табличной верстки используется Flexbox
        gap: '10px',
        width: '100%',
    },
    limitBox: {
        flex: 1, // Коробки делят пространство ровно 50/50
        textAlign: 'center',
        padding: '8px 4px',
        backgroundColor: '#fff',
        border: '1px solid #edf2f7',
        borderRadius: '8px',
    },
    limitLabel: {
        display: 'block',
        fontSize: '11px',
        fontWeight: '600',
        color: '#718096',
        marginBottom: '2px',
    },
    limitValue: {
        fontSize: '16px',
        fontWeight: '700',
        color: '#2d3748',
    },
    noResults: {
        textAlign: 'center',
        padding: '30px 16px',
        color: '#718096',
        fontSize: '14px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px dashed #cbd5e0',
    },
    // Стили плавающей кнопки "Наверх"
    scrollTopButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: '#0052cc',
        color: '#fff',
        border: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 82, 204, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        zIndex: 999,
        WebkitTapHighlightColor: 'transparent', // Убирает синюю рамку при клике на iOS
    }
};