import {Component, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector     : '.nested-list-demo',
    encapsulation: ViewEncapsulation.None,
    templateUrl  : 'assets/nested-list-demo.html'
})
export class NestedListDemoComponent {
    model = {
        nestedListNode: {
            'id'      : 161,
            'name'    : 'Senior Rehab Solutions',
            'children': [{
                'id'      : 1325,
                'name'    : 'Adams Region',
                'children': [{
                    'id'      : 249,
                    'name'    : 'Gainesville SC (Pecan Tree) - 123',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 250, 'name': 'Homestead of Denison - 173', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 244,
                    'name'    : 'Honey Grove Nursing Center - 106',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 245, 'name': 'Mullican Care Center (Savoy) - 107', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 246,
                    'name'    : 'Whitesboro Health & Rehab  - 111',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 163,
                'name'    : 'Bajaj Region',
                'children': [{
                    'id'      : 190,
                    'name'    : 'Cottonwood Creek Nursing & Rehab - 167',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 257,
                    'name'    : 'Dripping Springs SC (Hill Country) - 120',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 197, 'name': 'Gracy Woods II Living Center - 906', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 198,
                    'name'    : 'Gracy Woods Nursing Center - 907',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 183, 'name': 'Hearthstone Health Center - 118', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 185,
                    'name'    : 'Marlandwood East SC - 141',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 186, 'name': 'Marlandwood West SC - 142', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 196,
                    'name'    : 'Norwegian Home and Health Center - 844',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 260, 'name': 'Oakcrest Manor Nursing Home - 809', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 258,
                    'name'    : 'Onion Creek SC - 131',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 194, 'name': 'Park Valley Inn Health Center - 188', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 182,
                    'name'    : 'Parkbend Health Center  - 115',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 184, 'name': 'Sagebrook Health Center - 119', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 270,
                    'name'    : 'Saint Teresa Nursing & Rehab  - 826',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 195, 'name': 'Seton Medical Center - 825', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 187,
                    'name'    : 'Trinity Round Rock - 145',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 334, 'name': 'West Oaks Austin - 154', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 188,
                    'name'    : 'Western Hills SC - 147',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 189, 'name': 'Weston Inn SC - 148', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1335,
                'name'    : 'Brown Region',
                'children': [{'id': 1128, 'name': 'Cimarron El Paso - 858', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 1172,
                    'name'    : 'Grace Pointe Wellness Center - 861',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 1332, 'name': 'Mesa Hills Hospital - 863', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 273,
                    'name'    : 'Sierra Health Care Center - 850',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 269, 'name': 'Sierra Home Care & Hospice - 650', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 274,
                    'name'    : 'Sierra Vista Hospital - 854',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1330,
                'name'    : 'Coats Region',
                'children': [{
                    'id'      : 652,
                    'name'    : 'Midland Care Connection - Ann - 855',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 653, 'name': 'Midland Care Connection - Perry - 856', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 166,
                'name'    : 'Culpepper Region',
                'children': [{
                    'id'      : 220,
                    'name'    : 'Alpine Rehabilitation Center SCC - 193',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 222,
                    'name'    : 'Booker T. Washington Rehabilitation Center SCC - 195',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 221,
                    'name'    : 'Bradford Rehabilitation Center SCC - 194',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 223,
                    'name'    : 'Colonial Oaks Rehabilitation Center SCC - 196',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 225,
                    'name'    : 'Normandie Rehabilitation Center SCC - 199',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 226,
                    'name'    : 'Pilgrim Manor Rehabilitation Center SCC - 200',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 227,
                    'name'    : 'Shreveport Manor Rehabilitation Center SCC - 201',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 224, 'name': 'Spring Lake Rehabilitation Center SCC - 198', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 167,
                'name'    : 'Darby Region',
                'children': [{'id': 232, 'name': 'Corsicana - Trisun - 172', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 230,
                    'name'    : 'Heritage Oaks Retirement Village - 170',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 231,
                    'name'    : 'Heritage Oaks West Retirement Village - 171',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 229, 'name': 'Hewitt SC - 132', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 233,
                    'name'    : 'Kemp Care Center - 812',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 234, 'name': 'Kerens Care Center - 813', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 235,
                    'name'    : 'Sunflower Park Health Care - 814',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1328,
                'name'    : 'Durham Region',
                'children': [{
                    'id'      : 305,
                    'name'    : 'Denton Rehabilitation & Nursing Center - 846',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 248, 'name': 'Denton SC - 114', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 252,
                    'name'    : 'HCN Home Health @ Vintage - 11130',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 251,
                    'name'    : 'Premier Golden Heart Healthcare Services Home Health @ Vintage - 613',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 306,
                    'name'    : 'Prestonwood Rehabilitation & Nursing Center - 847',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 212, 'name': 'Victoria Gardens of Allen - 165', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 213,
                    'name'    : 'Victoria Gardens of Frisco - 176',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 247, 'name': 'Vintage Health Care (Denton) - 113', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 215,
                    'name'    : 'Vista Ridge Lewisville - 186',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 168,
                'name'    : 'Gonzalez Region',
                'children': [{
                    'id'      : 239,
                    'name'    : 'Pecan Valley Rehabilitation and Healthcare Center - 208',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 237, 'name': 'San Antonio SC - 160', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 236,
                    'name'    : 'Windcrest SC (73) - 149',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1327,
                'name'    : 'Inactive Facilities',
                'children': [{'id': 299, 'name': 'Matlock Place - 834', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1326,
                'name'    : 'Johnson Region',
                'children': [{
                    'id'      : 193,
                    'name'    : 'Hill Country Rehab & Nursing Center - 185',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 192, 'name': 'Indian Oaks Living Center - 184', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 191,
                    'name'    : 'Rosewood Retirement Community - 183',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1160,
                'name'    : 'Kaufman Region',
                'children': [{'id': 211, 'name': 'Brownwood SC - 138', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 298,
                    'name'    : 'Graham Oaks Care Center - 817',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 216, 'name': 'Greenhill Villas Mt. Pleasant - 815', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 205,
                    'name'    : 'Jacksonville SC - 121',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 228, 'name': 'Midland SC - 122', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 217,
                    'name'    : 'Songbird Lodge - 818',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 206, 'name': 'Stallings Court Rehab - 128', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 207,
                    'name'    : 'Stephenville SC (Community) - 130',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 218, 'name': 'Whispering Pines Lodge (Longview) - 819', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 171,
                'name'    : 'Master Region',
                'children': [{'id': 253, 'name': 'Home Office - 100', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 174,
                'name'    : 'Morris Region',
                'children': [{
                    'id'      : 1129,
                    'name'    : 'Arbor Grace Wellness - 860',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 1173, 'name': 'Bender Terrace Nursing Home - 862', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 408,
                    'name'    : 'BrightPointe at Lytle Lake - 857',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 272,
                    'name'    : 'Los Alamos Retirement Community  - 849',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 261, 'name': 'Northeast El Paso - Trisun - 174', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 1331,
                    'name'    : 'Onpointe at Home - 673',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 301,
                    'name'    : 'Silver Spring Rehabilitation, Health, Living Center - 838',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 262, 'name': 'Socorro SCC (Las Ventanas) - 210', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 271,
                    'name'    : 'St. Giles Nursing and Rehabilitation Center - 832',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 263,
                    'name'    : 'The Rehabilitation & Wellness Center of Dallas - 836',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 316, 'name': 'Windmill Nursing & Rehab Center - 164', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 175,
                'name'    : 'Robinson Region',
                'children': [{
                    'id'      : 266,
                    'name'    : 'Crest Medical Home Health @ Lakeside - 649',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 264, 'name': 'Lakeside - Trisun - 191', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 268,
                    'name'    : 'OnPointe at Mission Trails (Casa Rio Healthcare) - 821',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 267, 'name': 'River City Health Care - 820', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 265,
                    'name'    : 'Westover Hills Rehabilitation and Healthcare Center - 209',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 177,
                'name'    : 'Thigpen Region',
                'children': [{
                    'id'      : 276,
                    'name'    : 'Baytown Nursing & Rehab Center - 153',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 277,
                    'name'    : 'Cedar Bayou Nursing & Rehab Center - 155',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 286,
                    'name'    : 'Clear Brook Crossing Rehabilitation and Healthcare Center - 207',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 284, 'name': 'Cypress Glen  - 181', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 278,
                    'name'    : 'La Hacienda Nursing & Rehab Center - 156',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 285, 'name': 'Lake Arthur Place - 182', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 283,
                    'name'    : 'Meadows of Orange - 180',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 280, 'name': 'Pasadena SC  - 159', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 282,
                    'name'    : 'Summer Place Nursing & Rehab - 179',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 279,
                    'name'    : 'The Pointe Nursing & Rehab Center - 157',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 335,
                    'name'    : 'West Oaks Nursing & Rehab Center (Houston) - 163',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 336, 'name': 'Westwood SC (Houston) - 151', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 1329,
                'name'    : 'Trammel Region',
                'children': [{
                    'id'      : 293,
                    'name'    : 'Lake Pointe SC (Beacon Harbor) - 108',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 290, 'name': 'Rockwall Nursing Center - 101', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 292,
                    'name'    : 'Rowlett Health & Rehab  - 105',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 178,
                'name'    : 'Vanek Region',
                'children': [{
                    'id'      : 289,
                    'name'    : 'Brodie Ranch Nursing & Rehab Center - 162',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 288,
                    'name'    : 'Riverside Nursing & Rehab Center - 161',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 287, 'name': 'Stonebridge Health Center - 116', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 179,
                'name'    : 'Walther Region',
                'children': [{'id': 199, 'name': 'Apache Junction - 831', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 297,
                    'name'    : 'ARC Home Health @ Heartis - 671',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 204, 'name': 'Beltline SC - 110', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 300,
                    'name'    : 'Brookside Inn - 837',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 241, 'name': 'Crestwood Health & Rehab   - 104', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 209,
                    'name'    : 'Crowley Nursing & Rehab. - 136',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 240, 'name': 'Dallas SC - 103', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 302,
                    'name'    : 'Forest Ridge Senior Living - 841',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 1185,
                    'name'    : 'Golden Years HomeCare Specialist, Inc - 672',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 202, 'name': 'Grandview Terrace - 852', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 208,
                    'name'    : 'Green Oaks Nursing & Rehab - 135',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 210, 'name': 'Harbor Lakes Plaza Nursing - 137', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 1186,
                    'name'    : 'Healthy Living at Home - Arizona LLC - 653',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 1187,
                    'name'    : 'Healthy Living at Home - Grandview - 654',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 296,
                    'name'    : 'Hertitage Home Health @ Heartis Arlington - 670',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 295, 'name': 'Holland Lake SCC - 217', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 304,
                    'name'    : 'Juliette Fowler Communities - 845',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 219, 'name': 'La Dora Nursing & Rehab  - 824', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 203,
                    'name'    : 'La Loma Village - 853',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 1334, 'name': 'Lodge at Bear Creek - 865', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 1333,
                    'name'    : 'Onpointe Adora Midtown - 864',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 243, 'name': 'OnPointe Presby Dallas - 843', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 303,
                    'name'    : 'OnPointe TX Health Arlington - 842',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 554, 'name': 'Pacific Palms Healthcare - 859', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 242,
                    'name'    : 'Pleasant Manor  - 112',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 201,
                    'name'    : 'Prescott Nursing and Rehabilitation Center - 851',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 291, 'name': 'Red Oak Health & Rehab  - 102', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 200,
                    'name'    : 'Sierra Valley Rehab Center - 833',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 294, 'name': 'Stonegate SCC - 216', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 307,
                    'name'    : 'Texas Institute for Surgery - 848',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 214, 'name': 'Winters Park  - 177', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 180,
                'name'    : 'Wierzowiecki Region',
                'children': [{'id': 309, 'name': 'Meadow Creek SC - 143', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 308,
                    'name'    : 'San Angelo SC - 124',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 310, 'name': 'Summer Regency SC (Regency House) - 146', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }, {
                'id'      : 181,
                'name'    : 'Williams Region',
                'children': [{
                    'id'      : 254,
                    'name'    : 'Bandera Nursing & Rehab Center - 152',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {
                    'id'      : 256,
                    'name'    : 'Cibolo Creek Rehabilitation, Health, Living Center - 840',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 326, 'name': 'Cimarron Health & Rehab Center - 839', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 321,
                    'name'    : 'Coastal Palms - Trisun - 190',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 313, 'name': 'Corpus Christi SC - 140', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 324,
                    'name'    : 'Crest Medical at Avalon - 658',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 312, 'name': 'Edinburg SC - 139', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 322,
                    'name'    : 'Hunters Pond Rehabilitation and Healthcare Center - 206',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 255, 'name': 'Medina Valley Rehab - 835', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 238,
                    'name'    : 'Mesa Vista Inn Health Center - 166',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 311, 'name': 'Mission Nursing Rehab Center - 129', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 315,
                    'name'    : 'Mystic Park Nursing & Rehab Center - 158',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 317, 'name': 'River Ridge - Trisun - 168', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 320,
                    'name'    : 'Sundance Inn Health Center - 187',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 325, 'name': 'Tristar - Fredericksburg - 827', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 323,
                    'name'    : 'Valley Grande SCC - 215',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 318, 'name': 'Westwood - Trisun - 169', 'children': [], 'state': 'off', 'parent': null}, {
                    'id'      : 319,
                    'name'    : 'Windcrest Nursing and Rehabilitation (74) - 175',
                    'children': [],
                    'state'   : 'off',
                    'parent'  : null
                }, {'id': 314, 'name': 'Wurzbach SC - 150', 'children': [], 'state': 'off', 'parent': null}],
                'state'   : 'off',
                'parent'  : null
            }],
            'state'   : 'off',
            'parent'  : null,
            'text'    : 'Senior Rehab Solutions'
        }
    };

    markup = `
<nested-list
     [item]="model.nestedListNode">
</nested-list>
    `;


}
