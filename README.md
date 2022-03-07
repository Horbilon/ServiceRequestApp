# ServiceRequestApp - Guide

Full guide on how to run and test this repository.


	ServiceRequestApp/
		RequestApiApp = Backend
		angular-request = Frontend

## Software Requirements
1.	Microsoft SQL Server Management Studio (18 or more)
2.	SQL Server Express
3.	Visual Studio 2022 (with the workloads ASP.NET and web development and .NET desktop development)
4.	Visual Studio Code (or other IDE)
5.	Node.js
6.	Angular CLI

## Guide

### \[1\] - Microsoft SQL Server Management Studio
-	Open the software
-	Go to the `Object Explorer` tab
	-	Right Click the server and go to `Properties`
		-	In the `Connection` tab, Click `View Connections Properties`
			-	Copy the `Server Name`, it should be similar to (`(localdb)\MSSQLLocalDB`) 	


### \[2\] - Visual Studio 2022
-	Open the project `RequestApiApp`
-	Go to the `Solution Explorer` tab
	-	 Open the `appsettings.json` file
		-	In the `DefaultConnection` change the `(localdb)\MSSQLLocalDB` portion of the link to the server name to copied previously
	-	Open the `Properties` folder
		-	 Open the `appsettings.json` file
			-	Copy the `applicationUrl`, we will need it later
	-	Go to the `Package Manager Console` tab, if you do not have it open, you can search for it inside Visual Studio 2022
		- using `cd .\"yourPathToRequestApi"` travel to the RequestApi folder
		- if you don't have dotnet ef installed, write `dotnet tool install --global dotnet-ef`
		- write `dotnet ef migrations add InitialCreate`
		- write `dotnet ef database update`
	- Go back to SQL Server Management Studio and refresh your newly create database should appear under the folder `Databases`, if it doesnt appear there try closing and opening the program and/or check the server name to see they match
	- Run debug and check if it's running as intended, if Swagger has 2 APIs, Request and Issues, it should be ok
- Open the `insertData.sql` and copy/paste it to a new query in Microsoft SQL Server Management Studio, make sure you are using the database we created. 

### \[3\] - Visual Studio Code
- Open the folder `angular-request` with Visual Studio Code
- Go to `src>app` and open `request-api.service.ts`
	- Paste the port that you took from the API page
- In the menu go to `Terminal`, and open `New Terminal`
	- In the terminal run:
		- npm install
		- ng serve
