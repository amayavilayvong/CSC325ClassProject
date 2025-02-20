# Markdown Quality Control - Guide for Contributors

To ensure that all Markdown files in this repository meet our quality standards, contributors must run Vale and Markdownlint before pushing changes to the default branch.

## 1. Run Markdown Checks
* Before committing your Markdown files, run the following commands in the Dev Container terminal or your local environment:
```sh
# Run Vale to check the style and clarity of your Markdown
vale .

#Then, run Markdownlint to check for grammatical, spelling, or other formatting issues.
markdownlint .
```

### 2. Fix All Warnings
If the commands return any warnings or errors, you _must_ fix them before pushing your changes to the main branch.
  * Vale ensures that your Markdown content is clear, consistent, and follows the project's specific writing style. 
  * Markdownlint enforces proper Markdown formatting to prevent structural or readability issues, and it also checks for spelling or grammatical errors.

#### 3. Do NOT Modify the Configurations
**DO NOT** change any of the Vale or Markdownlint configurations.
* The repository is already set up with the correct settings. It should be ready to go.
* If you encounter an issue where something is _not working_, **do not attempt to configure Vale or Markdownlint yourself.** Instead, please report it to the team **immediately.**
