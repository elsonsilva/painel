import { Component } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import * as shape from 'd3-shape';
import * as d3 from 'd3';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-11',
      details: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage ' +
      'cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta ' +
      'who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue ' +
      'castello caerphilly chalk and cheese. Lancashire.',
      isAdmin: true,
      isCool: false
    },
    {
      name: 'George Duke',
      avatar: 'svg-12',
      details: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata ' +
      'corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor ' +
      'dictum mauris.',
      isAdmin: false,
      isCool: true
    },
    {
      name: 'Gener Delosreyes',
      avatar: 'svg-13',
      details: 'Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney\'s ' +
      'blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats ' +
      'chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. ' +
      'Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter ' +
      'Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack ' +
      'literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.',
      isAdmin: true,
      isCool: true
    },
    {
      name: 'Lawrence Ray',
      avatar: 'svg-14',
      details: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill ' +
      'a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. ' +
      'Always hungry pelt around the house and up and down stairs chasing phantoms.',
      isAdmin: false,
      isCool: false
    },
    {
      name: 'Ernesto Urbina',
      avatar: 'svg-10',
      details: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku ' +
      'wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
      isAdmin: false,
      isCool: true
    },
    {
      name: 'Gani Ferrer',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }
  ];

  selectedUser = this.users[0];
  isDarkTheme = false;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  private openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(user => {
        this.users.push(user);
        this.selectedUser = user;
      });
  }

  //ngx-charts
  card1: any[] = [
    {
      name: 'Germany',
      value: 40632
    }
  ];

  card2: any[] = [
    {
      name: 'United States',
      value: 49737
    }
  ];

  card3: any[] = [
    {
      name: 'France',
      value: 36745
    }
  ];

  single: any[] = [
    {
      name: 'Germany',
      value: 40632
    },
    {
      name: 'United States',
      value: 49737
    },
    {
      name: 'France',
      value: 36745
    },
    {
      name: 'United Kingdom',
      value: 36240
    },
    {
      name: 'Spain',
      value: 33000
    },
    {
      name: 'Italy',
      value: 35800
    }
  ];

  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 9940000
        },
        {
          "name": "2012",
          "value": 7500000
        },
        {
          "name": "2013",
          "value": 9960000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 5300000
        },
        {
          "name": "2011",
          "value": 4940000
        },
        {
          "name": "2012",
          "value": 7500000
        },
        {
          "name": "2013",
          "value": 7960000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 3300000
        },
        {
          "name": "2011",
          "value": 4940000
        },
        {
          "name": "2012",
          "value": 6500000
        },
        {
          "name": "2013",
          "value": 10960000
        }
      ]
    }
  ];



  private series: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: "Russian Federation",
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
  }, {
    name: "Germany",
    data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
  }, {
    name: "World",
    data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
  }];
  private categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];



  view: any[];

  viewcard: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  roundDomains = 'false';


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = false;

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType: string = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
    'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
  ];

  closedCurveType: string = 'Linear Closed';
  closedCurve: any = this.curves[this.closedCurveType];
  closedInterpolationTypes = [
    'Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'
  ];


  onSelect(event) {
    console.log(event);
  }

  title = 'Hello World!';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }


}
