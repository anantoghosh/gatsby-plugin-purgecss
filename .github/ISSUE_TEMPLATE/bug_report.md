---
name: Bug report
about: Create a report to help us improve

---

**Verify if it is a postcss bug**
First verify that gatsby-plugin-purgecss is working by setting the option `printRejected: true` which will print out the list of removed selectors.
If the plugin is working, but the css is not getting purged as you would have hoped then it's very likely a purgecss issue. File for purgecss related bugs here https://github.com/FullHuman/purgecss/issues.

- [ ] **I have verified that this is not a purgecss issue.**

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Link to reproducible repo or properly describe how to reproduce the issue. 

**Configs**
Upload/Paste the config files which you may think would be important.
Generally `gatsby-config.js`, `gatsby-node.js`, `package.json`.
Please remove any personal information present in the files.
- [ ] **I have removed all personal information.**

**Expected behavior**
A clear and concise description of what you expected to happen.

**Additional information**
Any related details which you think may have affected this bug.
