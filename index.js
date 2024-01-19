const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Mock data to simulate a database
const mockData = [
    { lastName: 'Doe', dob: '1990-01-01', ssnLast4: '1234' },
    { lastName: 'Smith', dob: '1985-02-15', ssnLast4: '5678' },
    { lastName: 'Johnson', dob: '1992-05-20', ssnLast4: '9876' },
    { lastName: 'Brown', dob: '1988-11-30', ssnLast4: '4321' },
    { lastName: 'Davis', dob: '1995-07-10', ssnLast4: '8765' },
    { lastName: 'Wilson', dob: '1991-03-25', ssnLast4: '3456' },
    { lastName: 'Miller', dob: '1987-09-18', ssnLast4: '7890' },
    { lastName: 'Garcia', dob: '1993-04-12', ssnLast4: '2109' },
    { lastName: 'Jones', dob: '1986-08-05', ssnLast4: '6543' },
    { lastName: 'Martinez', dob: '1994-12-22', ssnLast4: '8901' },
    { lastName: 'Lee', dob: '1990-06-14', ssnLast4: '1234' },
    { lastName: 'Harris', dob: '1985-02-07', ssnLast4: '5678' },
    { lastName: 'Clark', dob: '1992-10-01', ssnLast4: '9876' },
    { lastName: 'Lewis', dob: '1988-01-25', ssnLast4: '4321' },
    { lastName: 'Young', dob: '1995-07-05', ssnLast4: '8765' },
    { lastName: 'Adams', dob: '1991-03-20', ssnLast4: '3456' },
    { lastName: 'Hall', dob: '1987-09-13', ssnLast4: '7890' },
    { lastName: 'Turner', dob: '1993-05-02', ssnLast4: '2109' },
    { lastName: 'Perez', dob: '1986-11-28', ssnLast4: '6543' },
    { lastName: 'Wright', dob: '1994-12-15', ssnLast4: '8901' },
    // ... Repeat similar entries to reach 100
  ];
  
  // Example usage:
  console.log(mockData);
  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to check if the combination exists
app.post('/check-exists', (req, res) => {
  const { lastName, dob } = req.body;

  if (!lastName || !dob) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  const exists = mockData.some((data) => {
    return (
      data.lastName === lastName &&
      data.dob === dob 
    );
  });


    return res.status(200).json({ exists });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
