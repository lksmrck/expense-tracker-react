# Basic Expense Tracker
			
##  💡 Purpose
- Main purpose of this project was to practice the basic knowledge gained from the online Web development and React course

##  ⚙️ Basic functionality

###  💸 Expenses
- After the user click on <b>Add expense</b> button, the form with three inputs is displayed.
- User is required to fill in all three inputs, otherwise the red note with fill-in request is displayed.
- User is able to delete the expense by clicking the delete icon on the top-right corner of each expense.

###  📍Filtering
- Expenses can be filtered based on the year, where they belong. Expenses are filtered by year, new array is created and displayed.

###  📊 Statistics
- If there are any expenses in filtered year, the <b>Statistics</b> button is displayed. After clicking it, the modal window with backdrop and graph with monthly expense statistics in selected year is displayed. 
- The graph is fully created in CSS + React. User is able to close the modal by clicking on <b>Take me back</b> button or anywhere on the backdrop. 

###  ℹ️ Other
- If there is no expense in filtered year, the request for user to create new expense is displayed instead.
- Few dummy expenses are added into expense array as default.
- Expense tracker is responsive
