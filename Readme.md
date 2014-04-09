## 1. Merge Devlopment Branch into the Master

Once a feature is tested and completed merge [FeatureName] back into the master. To do this you must first pull the master branch, to ensure you side is up to date.

	$ git checkout master (switch to the master branch)
	$ git git pull [gitHub] master

If there are any conflicts resolve them, Once they are resolved save them and another pull is required

    $ git add -A
    $ git commit -m 'headliner'
    $ git commit -am 'Details'
    $ git pull [github] master
	$ git merge [FeatureName]

### Test

You may have ruined someone else's code or caused something unknown to you chat with the group members and see if you have messed with anything they have been working on.
		- Resolve this issue and if an issue cannot be resolved roll back and try to integrate you new changes.

## 2. Tag Your releases

Please tag your changes in the manners explain below

	$ git tag -a v [Major].[Production].[Staging]
	$ git push [RepoName] -tags

## 3. Tell you teammates

Tell them again that you have made changes to the github and have added new tags to the master.

- Verify gain that you haven't messed with anyone code

## 4. Push to Staging

After everything is said and done you can now push to Staging to full test stability in a staging environment.

    $ git push [staging] master

- staging linked to the remote staging heroku server

## 5. Test it

This is a Developer sandbox with a live environment test out to make sure everything is working correctly and nothing will fail with the changes you have just made this is your quality testing stage.

- Try Your hardest to break it, This is your sledge hammer stage
- BREAK IT
- Then fix it
- It must be crash proof.

## 6. Notify the Success of the New Feature

Tell everyone about how the new feature works what it will do a and defend the reason they hired you in the first place and why this and you matter in the work place.