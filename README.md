# netlify-profile-starter

 1. Creating a GitHub repository by Use this template feature of the
    GitHub 
 2. Clone the project in your machine Update the follow files: 

	 - profile_info.json
	 - i18n_keystore.json

	Path: netlify-profile-starter/client/src/data/ 
 3. Install Angular CLI 

	- `npm install -g @angular/cli`
    

 4. Install dependencies 

	- `npm i`
    

 5. Open Terminal and run npm run start
	 
	 - `npm run start`
   
 6. Open Browser and type url http://localhost:4200/ 
 7. Creating a Netlify Account and link it with the GitHub. 
 
	 - Website: https://app.netlify.com/ 
 
 8. Create a site by “Import an existing project from a Git repository” Wait till site deploy successfully.
 9. Click on Preview Deploy to see the preview 
 10. Install netlify cli 
	 
	 - `npm i netlify-cli -g`

 11. Create function 
	 - `netlify functions:create `

	 - Select JavaScript Select [hello-world] Basic function that shows async/await usage, and response formatting 
	 - Enter name of function: `profile-info` 
	       
 12. Similarly create i18n-keystore function 
 13. Open profile-info function 
 14. Add logic to return the profile info 
 15. Similarly update i18n-keystore function 
 16. Open `environment.prod.ts` file 

	 -  Path: netlify-profile-starter/client/src/environments 

 17. Update the value as per your site url 
 18. Stage the changes git add . 
 19. Commit the changes 

     - `git commit -m <message>` 

 20. Push the changes 

	 - `git push -u origin main` 

 21. Open netlify 
 22. Wait till site deploy successfully. 
 23. Click on Preview Deploy to see the preview