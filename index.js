const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Mock data to simulate a database
const mockData = [
    { lastName: 'Doe', dob: '01/01/1990', ssnLast4: '1234' },
    { lastName: 'Smith', dob: '02/15/1985', ssnLast4: '5678' },
    { lastName: 'Johnson', dob: '05/20/1992', ssnLast4: '9876' },
    { lastName: 'Brown', dob: '11/30/1988', ssnLast4: '4321' },
    { lastName: 'Davis', dob: '07/10/1995', ssnLast4: '8765' },
    { lastName: 'Wilson', dob: '03/25/1991', ssnLast4: '3456' },
    { lastName: 'Miller', dob: '09/18/1987', ssnLast4: '7890' },
    { lastName: 'Garcia', dob: '04/12/1993', ssnLast4: '2109' },
    { lastName: 'Jones', dob: '08/05/1986', ssnLast4: '6543' },
    { lastName: 'Martinez', dob: '12/22/1994', ssnLast4: '8901' },
    { lastName: 'Lee', dob: '06/14/1990', ssnLast4: '1234' },
    { lastName: 'Harris', dob: '02/07/1985', ssnLast4: '5678' },
    { lastName: 'Clark', dob: '10/01/1992', ssnLast4: '9876' },
    { lastName: 'Lewis', dob: '01/25/1988', ssnLast4: '4321' },
    { lastName: 'Young', dob: '07/05/1995', ssnLast4: '8765' },
    { lastName: 'Adams', dob: '03/20/1991', ssnLast4: '3456' },
    { lastName: 'Hall', dob: '09/13/1987', ssnLast4: '7890' },
    { lastName: 'Turner', dob: '05/02/1993', ssnLast4: '2109' },
    { lastName: 'Perez', dob: '11/28/1986', ssnLast4: '6543' },
    { lastName: 'Wright', dob: '12/15/1994', ssnLast4: '8901' },
  ];
  
  // Example usage:
  console.log(mockData);
  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to check if the combination exists
app.post('/check-exists', (req, res) => {
  const { lastName, dob, ssnLast4 } = req.body;

  if (!lastName || !dob || !ssnLast4) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  const exists = mockData.some((data) => {
    return (
      data.lastName === lastName &&
      data.dob === dob &&
      data.ssnLast4 === ssnLast4
    );
  });


    return res.status(200).json({ exists });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
