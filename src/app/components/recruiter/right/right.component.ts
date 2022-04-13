import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { Table } from 'src/app/models/Table';
import { Slot } from 'src/app/models/Slot';
import { MatSort } from '@angular/material/sort';
import { PanelistService } from 'src/app/services/panelist.service';
import { Interviewer } from 'src/app/models/Interviewer';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { Email } from '../../../../assets/smtp.js';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { DateRange } from '@angular/material/datepicker';

// const tableData: Table[] = [
//   {
//     slotId: 1,
//     title: 'Ayush Asawa',
//     emailId: 'ayush.asawa@accolitedigital.com',
//     roundAlloted: 'R2',
//     primarySkill: 'React',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Angular',
//   },
//   {
//     slotId: 2,
//     title: 'Kavya Pandey',
//     emailId: 'kavya.pandey@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Java',
//     secondarySkill: 'React',
//     tertiarySkill: 'MySQL',
//   },
//   {
//     slotId: 3,
//     title: 'Shreya Jain',
//     emailId: 'shreya.jain@accolitedigital.com',
//     roundAlloted: 'R2',
//     primarySkill: 'React',
//     secondarySkill: 'Angular',
//     tertiarySkill: 'Java',
//   },
//   {
//     slotId: 4,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 5,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 6,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 7,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 8,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 9,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 10,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 11,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 12,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 13,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 14,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
//   {
//     slotId: 15,
//     title: 'Nishant Raj',
//     emailId: 'nishant.raj@accolitedigital.com',
//     roundAlloted: 'R1',
//     primarySkill: 'Angular',
//     secondarySkill: 'Java',
//     tertiarySkill: 'Node Js',
//   },
// ];

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
})
export class RightComponent implements OnInit, OnChanges {
  //defines order in which column should be present
  //so basically the field here and our object that is data key should have same name For Eg. slotId here is key in tableData {slotId : 1, ...}

  displayedColumns: string[] = [
    'slotId',
    'title',
    'emailId',
    'roundAlloted',
    'primarySkill',
    'secondarySkill',
    'tertiarySkill',
    'date',
    'action',
  ];

  // data = new MatTableDataSource<Table>(tableData);
  interviewerData: Interviewer[] = [];

  slotData: Slot[];

  tableData: any = [];

  apiResponse: any = [];

  isLoading: boolean = false;

  //storing all the slots detials here which are fetched from API
  dataSource: MatTableDataSource<Table>;

  @Input('postRounds') public rounds = {
    round1: false,
    round2: false,
    round3: false,
    hr: false,
  };

  @Input('postSkills') public skills = {
    angular: false,
    java: false,
    devops: false,
    spring: false,
    react: false,
  };

  @Input('postDateRange') public dates = {
    // start: '',
    // end: '',
  };

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _recruiterService: RecruiterService,
    private _panelistService: PanelistService
  ) {}

  ngOnInit(): void {
    
    this._recruiterService.getData().subscribe({
      next: (data) => {
        this.slotData = data;
        // console.log(this.slotData);
        // this.dataSource = new MatTableDataSource<Slot>(data);
      },
      complete: () => {
        this.slotData.forEach((data) => {
          console.log(data);

          this._panelistService.getDetails(data.userId).subscribe({
            next: (val) => {
              // console.log(val);
              this.interviewerData.push(val);
              let temp = {
                userId: data.userId,
                slotId: data.slotId,
                startTime: data.startTime,
                endTime: data.endTime,
                title: val.username,
                emailId: val.emailid,
                roundAlloted: val.round_Alloted,
                primarySkill: val.primary_Skill,
                secondarySkill: val.secondary_Skill,
                tertiarySkill: val.tertiary_Skill,
                date: data.date,
                status: data.status,
              };
              this.tableData.push(temp);
            },
            complete: () => {
              this.dataSource = new MatTableDataSource<Table>(this.tableData);
              console.log(data.userId)
              console.log(this.dataSource)
              //api for history
              this.apiResponse = this.dataSource;
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            },
          });
          
        });
        
      },
    });
    
  }

  applyFilter(value: String) {
    this.dataSource.filter = value.trim().toLowerCase();
    
  }

  //any input is changed, this funtion is called
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if (changes['rounds'] !== undefined) {
      this.onChange(changes['rounds']);
    }
    if (changes['skills'] !== undefined) {
      this.onSkillChange(changes['skills']);
    }
    console.log(changes['skills']);

    if (changes['dates'] !== undefined) {
      this.onDateChange(changes['dates']);
      // this.onDateChange(changes['dates']);
    }
  }

  // For Round Selection
  onChange(rounds: any) {
    //all the rounds to display
    let allRounds = rounds.currentValue;

    console.log(allRounds);

    //all the rounds that are selected by usesr to filter
    let filteredRounds = [];

    console.log(filteredRounds);

    if (allRounds === undefined) {
      console.log('undefined');
    } else {
      console.log('filter applied');

      //if no filter is selected, display all the data
      let noFilter = allRounds.round1
        ? true
        : allRounds.round2
        ? true
        : allRounds.round3
        ? true
        : allRounds.hr
        ? true
        : false;

      console.log(noFilter);

      if (allRounds.round1 === true) filteredRounds.push('1');
      if (allRounds.round2 === true) filteredRounds.push('2');
      if (allRounds.round3 === true) filteredRounds.push('3');
      if (allRounds.hr === true) filteredRounds.push('4');

      if (noFilter) {
        this.dataSource = this.apiResponse;
        let filterData = this.dataSource.filteredData.filter((data) => {
          return filteredRounds.includes(data.roundAlloted);
        });
        console.log(filterData);

        this.dataSource = new MatTableDataSource(filterData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = this.apiResponse;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
  }
  //for Skills selection
  onSkillChange(skills: any) {
    //all the rounds to display
    let allSkills = skills.currentValue;

    console.log(allSkills);

    //all the rounds that are selected by usesr to filter
    let filteredSkills = [];

    if (allSkills === undefined) {
      console.log('undefined');
    } else {
      console.log('filter applied');

      //if no filter is selected, display all the data
      let noFilter = allSkills.java
        ? true
        : allSkills.react
        ? true
        : allSkills.spring
        ? true
        : allSkills.angular
        ? true
        : allSkills.devops
        ? true
        : false;

      console.log(noFilter);

      if (allSkills.java === true) filteredSkills.push('Java');
      if (allSkills.react === true) filteredSkills.push('React');
      if (allSkills.spring === true) filteredSkills.push('Spring');
      if (allSkills.angular === true) filteredSkills.push('Angular');
      if (allSkills.devops === true) filteredSkills.push('Devops');

      if (noFilter) {
        this.dataSource = this.apiResponse;
        let filterData = this.dataSource.filteredData.filter((data) => {
          return filteredSkills.includes(data.primarySkill);
        });
        console.log(filterData);

        this.dataSource = new MatTableDataSource(filterData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = this.apiResponse;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
  }
  //For Date Selection
  onDateChange(val: any) {
    if (val.currentValue === undefined) {
      console.log('no filter');
    } else {
      let event = val.currentValue;
      console.log(event);

      let startDate = event.start;
      let endDate = event.end;

      if (startDate !== null && endDate !== null) {
        let startMonth = startDate.getMonth() + 1;
        let startYear = startDate.getFullYear();
        let startDay = startDate.getDate();

        let endMonth = endDate.getMonth() + 1;
        let endYear = endDate.getFullYear();
        let endDay = endDate.getDate();

        let formattedStartDate = `${
          startMonth > 9 ? startMonth : '0' + startMonth
        }-${startDay > 9 ? startDay : '0' + startDay}-${startYear}`;

        let formattedEndDate = `${endMonth > 9 ? endMonth : '0' + endMonth}-${
          endDay > 9 ? endDay : '0' + endDay
        }-${endYear}`;

        console.log(formattedStartDate);
        console.log(formattedEndDate);

        console.log(this.dataSource);

        let filterData = this.dataSource.filteredData.filter((data) => {
          return (
            data.date >= formattedStartDate && data.date <= formattedEndDate
          );
        });
        this.dataSource = new MatTableDataSource(filterData);
      } else {
        this.dataSource = this.apiResponse;
      }
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  //to update the slot status
  //this method is basically to update the status of slot after sucessfully sending the mail
  //because of this when page is refreshed slot will no longer be on the list of available slots
  updateStatus(element) {
    console.log(element);
    let status = {
      slotId: element.slotId,
      userId: element.userId,
      status: 'not available',
      date: element.date,
      startTime: element.startTime,
      endTime: element.endTime,
    };

    //calling the updateStatus method from the service class to update the status of particular slot
    this._recruiterService.updateStatus(status).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
      complete: () => {
        console.log('Status Updated');
        this.isLoading = false;
      },
    });
  }

  //funtion to send the mail to user
  sendEmail(element) {
    confirm('Are you sure, you want to send the mail?')
      ? this._recruiterService
          .sendEmail(this.createEmailMessage(element))
          .subscribe({
            next: (result) => {
              console.log(result); //printing the message(body of the mail)
            },
            error: (err) => {
              alert('Some error occur, try again'); //alert if there are some errors
              console.log(err);
            },
            complete: () => {
              element.status = 'not available'; //changing the value of status
              console.log('Mail Send...');
              this.updateStatus(element);
              alert('Email was send Sucessfully');
            },
          })
      : console.log('Not Confirmed');

    this.isLoading = true;
  }

  //gather all the information that is to be passed as body to post request
  createEmailMessage(element) {
    console.log(element.status);

    const message: Email = {
      toEmail: element.emailId,
      subject: `Interview Scheduled on ${element.date}`,
      body: `Hey ${element.title},

As per slot given by you, we have scheduled your Interview on ${element.date} from ${element.startTime} to ${element.endTime}.
We hope you are ready to take the Interview and incase of any queries,
please feel free to reach out to us.

Thanks & Regards,
Recruitment Team.`,
    };

    return message;
  }
}

// dataSource!: MatTableDataSource<any>;
// res!: any[];
// oriRes!: any[];

// @ViewChild('paginator') paginator!: MatPaginator;

// constructor(private service: RecruiterService) {}

// ngOnInit() {
//   this.service.getData().subscribe((Response: any[]) => {
//     this.oriRes = Response;
//     this.res = Response;
//     this.dataSource = new MatTableDataSource(this.res);
//     this.dataSource.paginator = this.paginator;

//     console.log(this.dataSource._filterData);
//   });

//   this.service.check.subscribe((data) => {
//     if (data) {
//       this.res = this.res.filter((data) => data.id % 29 === 0);
//     } else {
//       this.res = this.oriRes;
//     }
//     this.dataSource = new MatTableDataSource(this.res);
//     this.dataSource.paginator = this.paginator;
//   });
// }
//
