import React, { useState, useMemo } from 'react';
import {
    Footer,
} from "./styled";

// Данные из файла "Значения по щупу.xlsx"
const ENGINE_DATA = [
    {
        "engine": "CPNB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CSUA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CSUB",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CTBA",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CTBC",
        "ring": "84",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CVUB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CVUC",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "DEHA",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "DJPB",
        "ring": "110",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "DKMB",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "DKNA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DKUA",
        "ring": "",
        "min": "0",
        "max": ""
    },
    {
        "engine": "DKWB",
        "ring": "",
        "min": "0",
        "max": ""
    },
    {
        "engine": "DKWC",
        "ring": "",
        "min": "0",
        "max": ""
    },
    {
        "engine": "DKYA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLGA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLHA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLHB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLHC",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLZA",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "DMTA",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DMTC",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DPAA",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DPMA",
        "ring": "",
        "min": "0",
        "max": ""
    },
    {
        "engine": "DPJB",
        "ring": "110",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "DKMB",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "DKNA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DKYA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLGA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DRYA",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CVMD",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DDVB",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CAEB",
        "ring": "39",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CALB",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CDNB",
        "ring": "39",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CDNC",
        "ring": "39",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CHJA",
        "ring": "39",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "B",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "D",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "E",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CPMA",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CPMB",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CTUC",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CTUD",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CTVA",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CTXA",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DDVE",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DDVF",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DESA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEWA",
        "ring": "126",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DEZD",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEZF",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DFBA",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DMGA",
        "ring": "44",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DMGH",
        "ring": "44",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DMKD",
        "ring": "116",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DTPA",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DTPB",
        "ring": "39",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CWWB",
        "ring": "110",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "CXYA",
        "ring": "110",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "CZSA",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "CZSE",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "CVXB",
        "ring": "174",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "DDVC",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DMGK",
        "ring": "44",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CYGA",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CYNB",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CYPA",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CYPB",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "CDSB",
        "ring": "186",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CDTA",
        "ring": "До 2011: 83",
        "min": "0",
        "max": "До 2011: 16"
    },
    {
        "engine": "CDTB",
        "ring": "До 2011: 83",
        "min": "0",
        "max": "До 2011: 16"
    },
    {
        "engine": "CDTC",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CLAB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CMHA",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CTUB",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CVBA",
        "ring": "123",
        "min": "0",
        "max": "22"
    },
    {
        "engine": "CYPA",
        "ring": "32",
        "min": "0",
        "max": "27"
    },
    {
        "engine": "DDTA",
        "ring": "185",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "CMDA",
        "ring": "123",
        "min": "0",
        "max": "22"
    },
    {
        "engine": "CPAA",
        "ring": "123",
        "min": "0",
        "max": "22"
    },
    {
        "engine": "CREA",
        "ring": "141",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "CREC",
        "ring": "141",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "CREG",
        "ring": "141",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "CTDA",
        "ring": "141",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "CTFA",
        "ring": "185",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CTGA",
        "ring": "185",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CTGF",
        "ring": "185",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CTNA",
        "ring": "",
        "min": "0",
        "max": ""
    },
    {
        "engine": "CVJA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CYMC",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CYRB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DCBD",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "DCBE",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "DEUB",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEUC",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEWB",
        "ring": "123",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DEZB",
        "ring": "36",
        "min": "0",
        "max": "189"
    },
    {
        "engine": "DEZE",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DFVA",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DMKC",
        "ring": "",
        "min": "0",
        "max": ""
    },
    {
        "engine": "DTNA",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DMGK",
        "ring": "44",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DCUE",
        "ring": "110",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "DMFA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DMFB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DNEA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CRTC",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CRTE",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CUEA",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CVZA",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CZAA",
        "ring": "174",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "CZAC",
        "ring": "174",
        "min": "0",
        "max": "11"
    },
    {
        "engine": "CZZA",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CDRA",
        "ring": "168",
        "min": "0",
        "max": "20"
    },
    {
        "engine": "CEUA",
        "ring": "185",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "CGTA",
        "ring": "185",
        "min": "0",
        "max": "21"
    },
    {
        "engine": "CGWA",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CGWD",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CGXC",
        "ring": "132",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CSUE",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CTCB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CTCC",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CVUA",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CVUB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CZJA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CZVA",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CZVB",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CZVC",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CZVD",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CZVF",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DDCA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DDCB",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DDDA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CDUC",
        "ring": "83",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CDUD",
        "ring": "83",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CGLC",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CHLD",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CGLE",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CGQB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CKVB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CKVC",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CLAA",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CLAB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CMGB",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CNHA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CPNB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CRTD",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CRTE",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CRTF",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CSUD",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CAGA",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CAGB",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CAHA",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CAHB",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CCWA",
        "ring": "32",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CCWB",
        "ring": "32",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CGLA",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CGLB",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CGLD",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CGQB",
        "ring": "87",
        "min": "0",
        "max": "12"
    },
    {
        "engine": "CJCA",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CJCB",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CJCD",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CMGA",
        "ring": "46",
        "min": "0",
        "max": "24"
    },
    {
        "engine": "CNHC",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CVKB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CVKC",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CVLA",
        "ring": "55",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "CVNA",
        "ring": "31",
        "min": "0",
        "max": "22"
    },
    {
        "engine": "CWGD",
        "ring": "76",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CYMC",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CYRB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CYRC",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DBPA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DDWA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DDWB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DECA",
        "ring": "76",
        "min": "0",
        "max": "14"
    },
    {
        "engine": "DEMA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DHDA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DKNA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLVA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DLVB",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "DMSA",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DMSB",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DMTA",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DPAA",
        "ring": "58",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DRXA",
        "ring": "60",
        "min": "0",
        "max": "16"
    },
    {
        "engine": "CSWB",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "CZHA",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DCPC",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DCPE",
        "ring": "99",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DESA",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DETA",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DETB",
        "ring": "13",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEUA",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEUB",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEUC",
        "ring": "10",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEWB",
        "ring": "123",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DEZB",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DEZE",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DFVA",
        "ring": "13",
        "min": "0",
        "max": "15"
    },
    {
        "engine": "DMGA",
        "ring": "44",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DMKC",
        "ring": "116",
        "min": "0",
        "max": "13"
    },
    {
        "engine": "DTNA",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DTNB",
        "ring": "36",
        "min": "0",
        "max": "18"
    },
    {
        "engine": "DTPA",
        "ring": "36",
        "min": "0",
        "max": "18"
    }
];

export default function OilDipstickLookup() {
    const [search, setSearch] = useState('');

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
                    placeholder="Введите код двигателя (например, CAEB)..."
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
                                <span style={styles.engineLabel}>ДВС</span>
                                <span style={styles.engineCode}>{item.engine}</span>
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
                <a href="https://t.me/aaliaksei">@aaliaksei</a>
            </Footer>
        </div>
    );
}

// Адаптивные стили, оптимизированные под мобильные устройства (Mobile-first layout)
const styles = {
    container: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: '#f4f6f9',
        color: '#333',
        minHeight: '100vh',
        padding: '16px',
        boxSizing: 'border-box',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    title: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: '0 0 4px 0',
    },
    subtitle: {
        fontSize: '13px',
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
        padding: '14px 40px 14px 16px',
        fontSize: '15px',
        borderRadius: '12px',
        border: '1px solid #dcdcdc',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
        outline: 'none',
        transition: 'border-color 0.2s',
        WebkitAppearance: 'none', // Исправление закруглений на iOS
    },
    clearButton: {
        position: 'absolute',
        right: '12px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        color: '#999',
        cursor: 'pointer',
        padding: '4px',
    },
    metaInfo: {
        fontSize: '12px',
        color: '#777',
        marginBottom: '16px',
        paddingLeft: '4px',
    },
    cardContainer: {
        display: 'block', // Линейный список карточек под вертикальный скролл смартфона
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '14px',
        padding: '16px',
        marginBottom: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        border: '1px solid #edf0f4',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'baseline',
        borderBottom: '1px solid #f0f2f5',
        paddingBottom: '10px',
        marginBottom: '12px',
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
        fontSize: '20px',
        fontWeight: '700',
        color: '#0052cc', // Акцентный автомобильный синий
        letterSpacing: '0.5px',
    },
    cardBody: {
        display: 'block',
    },
    paramRow: {
        display: 'flex',
        justifyContent: 'between',
        alignItems: 'center',
        marginBottom: '12px',
        backgroundColor: '#f8fafc',
        padding: '10px 12px',
        borderRadius: '8px',
    },
    paramLabel: {
        fontSize: '14px',
        color: '#4a5568',
        flex: 1,
    },
    paramValueHighlight: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1a202c',
        backgroundColor: '#e2e8f0',
        padding: '2px 10px',
        borderRadius: '6px',
        minWidth: '45px',
        textAlign: 'center',
    },
    limitsGrid: {
        display: 'table',
        width: '100%',
        tableLayout: 'fixed',
    },
    limitBox: {
        display: 'table-cell',
        width: '50%',
        textAlign: 'center',
        padding: '8px',
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
        padding: '40px 20px',
        color: '#718096',
        fontSize: '15px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px dashed #cbd5e0',
    }
};
