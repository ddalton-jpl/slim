"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?s.createElement(h,r(r({ref:t},p),{},{components:n})):s.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(7462),i=(n(7294),n(3905));const a={},r="Secrets Detection",o={unversionedId:"guides/software-lifecycle/security/secrets-detection/README",id:"guides/software-lifecycle/security/secrets-detection/README",title:"Secrets Detection",description:"We recommend detect-secrets to identify secure information included in source controlled files. Its prowess lies in its extensible Python plugin API, which allows custom rules and heuristics to tackle a broad spectrum of secrets. Designed to scan the project's current state rather than the entire git history,",source:"@site/docs/guides/software-lifecycle/security/secrets-detection/README.md",sourceDirName:"guides/software-lifecycle/security/secrets-detection",slug:"/guides/software-lifecycle/security/secrets-detection/",permalink:"/slim/docs/guides/software-lifecycle/security/secrets-detection/",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/software-lifecycle/security/secrets-detection/README.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"GitHub Security Best Practices",permalink:"/slim/docs/guides/software-lifecycle/security/github-security/"},next:{title:"Continuous Integration",permalink:"/slim/docs/guides/software-lifecycle/continuous-integration/"}},l={},c=[{value:"Layer 1: Full Scan and Audit (Client-side)",id:"layer-1-full-scan-and-audit-client-side",level:2},{value:"Layer 2: Git Commit Scan (Client-side)",id:"layer-2-git-commit-scan-client-side",level:2},{value:"Layer 3: Server-side Push to GitHub.com",id:"layer-3-server-side-push-to-githubcom",level:2},{value:"Attention for using Detect Secrets",id:"attention-for-using-detect-secrets",level:2},{value:"Recommended Workflow",id:"recommended-workflow",level:2},{value:"More Configurations",id:"more-configurations",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secrets-detection"},"Secrets Detection"),(0,i.kt)("p",null,"We recommend ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yelp/detect-secrets"},"detect-secrets"),' to identify secure information included in source controlled files. Its prowess lies in its extensible Python plugin API, which allows custom rules and heuristics to tackle a broad spectrum of secrets. Designed to scan the project\'s current state rather than the entire git history,\nit operates swiftly, making it ideal for continuous integration pipelines. Leveraging the concept of a "baseline file" (',(0,i.kt)("inlineCode",{parentName:"p"},".secrets.baseline"),"), it enables easy handling of known secrets and false positives, facilitating its gradual integration into existing projects. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/NASA-AMMOS/slim/assets/3129134/58ecb3de-0ab4-4302-b546-e9cd1de8e52f",alt:"detect-secrets-wordcloud"})),(0,i.kt)("p",null,"Our application of ",(0,i.kt)("inlineCode",{parentName:"p"},"detect-secrets")," embraces a tri-layered approach, bolstered by customized plugins (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp#viewing-all-enabled-plugins"},"full list of plugins available here"),"), to provide robust protection against potential secret leaks at the earliest stage.\nThis page proposes three layers of secret scanning to help prevent secrets from being leaked on GitHub"),(0,i.kt)("p",null,"Three layers of protection are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Client-side full scan of existing code base"),(0,i.kt)("li",{parentName:"ol"},"Client-side scan of updated code upon Git commit"),(0,i.kt)("li",{parentName:"ol"},"Server-side push to GitHub.com from client")),(0,i.kt)("p",null,"Each layer has its own advantages and disadvantages. The full use of these three layers of protection is recommended to minimize human negligence."),(0,i.kt)("mermaid",{value:'flowchart TB\n  User([fa:fa-user User])\n\n  subgraph UserWorkflow["User Workflow to Secure Secrets"]\n    Layer1["Layer 1: Full scan (client-side)"]\n    Layer2["Layer 2: Git commit scan (client-side)"]\n    Layer3["Layer 3: GitHub.com (server-side)"]\n\n    Layer1 --\x3e|If Secrets Detected| Clean1[Clean local file directly.]\n    Layer2 --\x3e|If Secrets Detected| Clean2[Clean local file directly. <br/> Don\'t need to worry about cleaning commit history]\n    Layer3 --\x3e|If Secrets Detected| Clean3[Purge or Fix the commit manually]\n    \n    SaveTime["It saves your time. And secrets are safe from GitHub"]\n    Clean1 --\x3e SaveTime\n    Clean2 --\x3e SaveTime\n\n    Secure["Only GitHub-Protected branch is in safe. <br/> Secrets are leaked on other branch before cleaning"]\n    Clean3--\x3e Secure\n  end\n\n  User --\x3e|At least use| Layer1\n  User --\x3e|Helpful to use| Layer2\n  User --\x3e|Optional to use| Layer3\n\n    style User fill:#F6F5F3,stroke:#333,stroke-width:1px\n  style UserWorkflow fill:#AF7AC5,stroke:#333,stroke-width:2px\n  style Layer1 fill:#F3B044,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5\n  style Layer2 fill:#F3B044,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5\n  style Layer3 fill:#F3B044,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5\n  style Clean1 fill:#5A88ED,stroke:#333,stroke-width:2px\n  style Clean2 fill:#5A88ED,stroke:#333,stroke-width:2px\n  style Clean3 fill:#5A88ED,stroke:#333,stroke-width:2px\n  style SaveTime fill:#5ABF9B,stroke:#333,stroke-width:2px\n  style Secure fill:#AF3034,stroke:#333,stroke-width:2px\n'}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Below three layers, are running on experimental version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp"},"slim-detect-secrets")," which supports additional secret detection ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp#viewing-all-enabled-plugins"},"plugins"),"."),(0,i.kt)("p",{parentName:"blockquote"},"They are:"),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"AWS sensitive information"),(0,i.kt)("li",{parentName:"ul"},"Public IP Address"),(0,i.kt)("li",{parentName:"ul"},"Absolute Path"),(0,i.kt)("li",{parentName:"ul"},"Email Address")),(0,i.kt)("p",{parentName:"blockquote"},"Link to their ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp/detect_secrets/plugins"},"implementation")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp/tests/plugins"},"test suites"))),(0,i.kt)("p",{parentName:"blockquote"},"It is being tested by both ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NASA-AMMOS/slim"},"NASA-AMMOS/slim")," team and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yelp/detect-secrets"},"Yelp/detect-secrets")," team.\nEventually, it will be merged into Yelp/detect-secrets."),(0,i.kt)("p",{parentName:"blockquote"},"At that time, this document will be updated to use the official version of detect-secrets.")),(0,i.kt)("h2",{id:"layer-1-full-scan-and-audit-client-side"},"Layer 1: Full Scan and Audit (Client-side)"),(0,i.kt)("p",null,"The first layer initiates a direct scan on the developer's local environment. This is achieved through the ",(0,i.kt)("inlineCode",{parentName:"p"},"detect-secrets")," tool, which scans the entire codebase and outputs a new baseline file containing detected secrets. The developer can then audit this file to view detailed information about detected secrets."),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant Dev as Developer\n    participant Env as Local Environment\n    participant DS as Detect-Secrets\n    participant File as Baseline File\n    participant Audit as Audit Tool\n\n    Note over Dev,Env: Developer initiates a direct scan for secrets\n    Dev->>+Env: Triggers direct scan\n    Env->>+DS: Requests scan on the codebase\n    DS->>DS: Performs secret scanning\n    DS->>File: Generates new baseline file\n    File->>DS: Acknowledges file creation\n    DS--\x3e>-Env: Returns scan results and new baseline file\n    Env--\x3e>Dev: Presents scan results and new baseline file\n    Note over Dev,File: Developer may audit the new baseline file\n    Dev->>Audit: Initiates audit on the new baseline file\n    Audit->>File: Fetches details from the baseline file\n    File->>Audit: Returns secret details\n    Audit--\x3e>Dev: Presents detailed information of detected secrets\n"}),(0,i.kt)("p",null,"Starter Kit:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install experimental version of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp"},"slim-detect-secrets"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install git+https://github.com/NASA-AMMOS/slim-detect-secrets.git@exp\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Scan all local files from current directory and output the result as a baseline file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"detect-secrets scan ./ --all-files --disable-plugin AbsolutePathDetectorExperimental --exclude-files '.secrets.*' --exclude-files '.git*' > .secrets.baseline\n")),(0,i.kt)("p",null,"Here it scans all the local files from current directory, but excludes ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory and ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets")," baseline files from scanning to reduce false positive. Make modifications when necessary."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Check result in the baseline file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat .secrets.baseline\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This command is supported in Unix-like system. For Windows, you can use other command, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"type .secrets.baseline"),'\nIf any secrets are detected, the result will be located at the "results:" of the file.')),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"results": {\n    "Sample/sample-develop.sh": [\n    {\n    "type": "AWS Sensitive Information",\n    "filename": "Sample/sample-develop.sh",\n    "hashed_secret": "d3f72b97cd8756fe12345678bdf96aef1ac23b7d",\n    "is_verified": false,\n    "line_number": 39\n},\n')),(0,i.kt)("p",null,"Only line number is visible through this approach. You can check them manually in the file, or use the following audit tool to conveniently view the actual secret."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Analyze results by ",(0,i.kt)("inlineCode",{parentName:"li"},"audit")," tool")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"detect-secrets audit .secrets.baseline\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"detect-secrets audit tool can provide you an interactive interface to view the actual secret based on the line number\nand label it as false positive or true positive.")),(0,i.kt)("p",null,"For example,"),(0,i.kt)("img",{width:"564",src:"https://github.com/NASA-AMMOS/slim/assets/92573736/0fb25452-1ada-4979-9873-a1ca615701b5"}),(0,i.kt)("p",null,"It also provides other ways to present the result. For more information, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yelp/detect-secrets#auditing-secrets-in-baseline"},"Auditing Secrets in Baseline")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note"))," if you have marked any detected secrets as true positives, its best to first remove all references to those secrets in your code and then rerun a full scan to generate a fresh audit report that you can compare against to ensure you only have false-positives (white-listed secrets) in your ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets.baseline")," - this is especially important for Layer 2."),(0,i.kt)("h2",{id:"layer-2-git-commit-scan-client-side"},"Layer 2: Git Commit Scan (Client-side)"),(0,i.kt)("p",null,"The second layer is a pre-commit hook implemented in the local environment. This hook utilizes a ",(0,i.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," file to config the pre-commit hook. The hook is triggered when the developer attempts to commit changes. The hook will scan the changes and ",(0,i.kt)("strong",{parentName:"p"},"compare")," them to the baseline file generated in the first layer. If any ",(0,i.kt)("strong",{parentName:"p"},"new secrets")," are detected, the hook will prevent the commit and report the detected secrets to the developer."),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant User as Developer\n    participant Local as Local Environment\n    participant Config as .pre-commit-config.yaml\n    participant PCH as Pre-commit Hook\n    participant DS as Detect-Secrets\n    participant File as Baseline File\n\n    Note over User,Local: Developer attempts to commit\n    User->>+Local: Request commit\n    Local->>+Config: Fetches pre-commit config\n    Config->>PCH: Returns config with Detect-Secrets setup\n    PCH->>DS: Request secret scan with existing baseline\n    DS->>File: Fetches baseline file\n    File->>DS: Returns baseline file\n    DS->>DS: Scans changes for secrets with custom plugins\n    alt New Secrets Detected\n        DS--\x3e>PCH: Returns detected secrets\n        PCH--\x3e>Local: Prevents commit & reports detected secrets\n        Local--\x3e>User: Prevents commit & reports detected secrets\n    else No New Secrets Detected\n        DS--\x3e>PCH: Returns clean result\n        PCH--\x3e>Local: Allows commit\n        Local--\x3e>User: Commits changes\n    end\n"}),(0,i.kt)("p",null,"Starter Kit:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://pre-commit.com/#install"},"pre-commit"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pre-commit\n")),(0,i.kt)("p",null,"This tool is used to install pre-commit hook in your local git repository."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},".pre-commit-config.yaml")," file in root directory of your project with the following contents")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"repos:\n  - repo: https://github.com/NASA-AMMOS/slim-detect-secrets\n    # using commit id for now, will change to tag when official version is released\n    rev: 91e097ad4559ae6ab785c883dc5ed989202c7fbe\n    hooks:\n      - id: detect-secrets\n        args:\n          - '--baseline'\n          - '.secrets.baseline'\n          - '--exclude-files'\n          - '.git*'\n          - '--exclude-files'\n          - '.secrets.*' \n\n")),(0,i.kt)("p",null,"This file is used to config the pre-commit hook. In this example, we use the experimental version of ",(0,i.kt)("inlineCode",{parentName:"p"},"slim-detect-secrets")," tool. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--baseline")," argument is used to specify the baseline file generated in the first layer. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--exclude-files")," argument is used to exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory and ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets")," baseline files from scanning to reduce false positives. Make modifications when necessary."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Install pre-commit hook")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pre-commit install\n")),(0,i.kt)("p",null,"This command reads the ",(0,i.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," file and installs the pre-commit hook in your local git repository.\nAfter this, you can see a ",(0,i.kt)("inlineCode",{parentName:"p"},".git/hooks/pre-commit")," file is created in your local git repository."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Add the baseline file ",(0,i.kt)("inlineCode",{parentName:"li"},".secrets.baseline")," in your local Git repository under the following conditions only:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"You wish to share white-listed secrets with other team members"),(0,i.kt)("li",{parentName:"ol"},"You've removed any references in your code to sensitive secrets detected that are not white-listed, i.e. find and modify code referenced in you ",(0,i.kt)("inlineCode",{parentName:"li"},".secrets.baseline")," with flag ",(0,i.kt)("inlineCode",{parentName:"li"},"is_secret: true")),(0,i.kt)("li",{parentName:"ol"},"You've re-run a fresh ",(0,i.kt)("inlineCode",{parentName:"li"},"detect-secrets scan")," followed by a ",(0,i.kt)("inlineCode",{parentName:"li"},"detect-secrets audit")," and your ",(0,i.kt)("inlineCode",{parentName:"li"},".secrets.baseline")," ONLY now contains white-listed entries, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"is_secret: false"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning"),": Adding your ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets.baseline")," file to your local Git and pushing changes to a remote without following the above directions could create a security risk by sharing the sensitive parts of your security scan with the outside world!"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Commit your changes")),(0,i.kt)("p",null,"Now, you can commit your changes as usual. If any ",(0,i.kt)("strong",{parentName:"p"},"new secrets")," are detected, the commit will be prevented and the secrets will be reported."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("img",{width:"559",alt:"Screen Shot 2023-04-20 at 7 32 10 AM",src:"https://user-images.githubusercontent.com/92573736/233398613-6e189322-4d97-47c3-b3ba-bd700a716cf6.png"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": The pre-commit hook blocks a commit by comparing new secrets with the results in the ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets.baseline")," file. If new secrets are introduced, the hook will report them, but it does not automatically update the ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets.baseline")," file. To update the baseline file with newly introduced secrets, you need to re-run the scan command in Layer 1 (step 2) and generate a new baseline file.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": during commit checks, detect secrets may not display all secrets present within a single file during a single scan. This can be to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yelp/detect-secrets/blob/master/docs/design.md#potentialsecret"},"minimize noise"),", among other reasons. Thus if you have multiple violations of different types of secrets per file, multiple independent commits may be necessary to help identify all violations."),(0,i.kt)("p",{parentName:"blockquote"},"You can create an empty result baseline file by running this command at a directory without secrets.")),(0,i.kt)("h2",{id:"layer-3-server-side-push-to-githubcom"},"Layer 3: Server-side Push to GitHub.com"),(0,i.kt)("p",null,"The final layer of our solution is a server-side pre-commit scan powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Action"),". This scan is triggered whenever a developer pushes to a branch or creates a pull request. If the scan detects any new secrets, it can generate a not detailed report compared to layer 2 (for security concern), email to the developer, and report a status check to GitHub. The status check will prevent the developer from merging the pull request or pushing to the ",(0,i.kt)("strong",{parentName:"p"},"protected")," branch. This layer protects the protected branch from being polluted by secrets, but secrets can still be pushed to other branches."),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant User as Developer\n    participant GH as GitHub\n    participant Workflow as detect-secrets.yaml\n    participant GA as GitHub Action\n    participant DS as Detect-Secrets\n\n    Note over User,GH: Developer creates pull request or pushes to branch\n    User->>+GH: Creates pull request / pushes to branch\n    GH->>+Workflow: Triggers GitHub Action workflow\n    Workflow->>GA: Sets up and runs Detect-Secrets scan\n    GA->>DS: Requests secret scan\n    DS->>DS: Scans repository for secrets\n    alt Secrets Detected\n        DS--\x3e>GA: Returns detected secrets\n        GA--\x3e>GH: Fails status check\n        GH--\x3e>User: Prevents merge / push & sends email notification\n    else No Secrets Detected\n        DS--\x3e>GA: Returns clean result\n        GA--\x3e>GH: Passes status check\n        GH--\x3e>User: Allows merge / push\n    end\n"}),(0,i.kt)("p",null,"Starter Kit:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a workflow file ",(0,i.kt)("inlineCode",{parentName:"li"},"detect-secrets.yaml")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows")," directory from your repository root.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Secret Detection Workflow\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n\njobs:\n  secret-detection:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v2\n\n      - name: Install necessary packages\n        run: |\n          # This is the experimental version of slim-detect-secrets.\n          # It will be updated to the official Yelp/detect-secrets version once the customized plugins are merged.\n          # For more information about slim/detect-secrets, check the following:\n          # 1. https://github.com/NASA-AMMOS/slim-detect-secrets/tree/exp\n          # 2. https://github.com/NASA-AMMOS/slim/blob/d20ee6134a0dc0e0dab11d2d2570e358ef7e4550/continuous-testing/starter-kits/README.md#detect-secrets\n          pip install git+https://github.com/NASA-AMMOS/slim-detect-secrets.git@exp\n          # This library is used for JSON operations.\n          pip install jq\n          \n      - name: Create an initial .secrets.baseline if .secrets.baseline does not exist\n        run: |\n          if [ ! -f .secrets.baseline ]; then\n            # This generated baseline file will only be temporarily available on the GitHub side and will not appear in the user\'s local files.\n            # Scanning an empty folder to generate an initial .secrets.baseline without secrets in the results.\n            echo "\u26a0\ufe0f No existing .secrets.baseline file detected. Creating a new blank baseline file."\n            mkdir empty-dir\n            detect-secrets scan empty-dir > .secrets.baseline\n            echo "\u2705 Blank .secrets.baseline file created successfully."\n            rm -r empty-dir\n          else\n            echo "\u2705 Existing .secrets.baseline file detected. No new baseline file will be created."\n          fi\n\n      - name: Scan repository for secrets\n        run: |\n          # scripts to scan repository for new secrets\n          \n          # backup the list of known secrets\n          cp .secrets.baseline .secrets.new\n\n          # find the secrets in the repository\n          detect-secrets scan --disable-plugin AbsolutePathDetectorExperimental --baseline .secrets.new --exclude-files \'.secrets.*\' --exclude-files \'.git*\'\n               \n          # if there is any difference between the known and newly detected secrets, break the build\n          # Function to compare secrets without listing them\n          compare_secrets() { diff <(jq -r \'.results | keys[] as $key | "\\($key),\\(.[$key] | .[] | .hashed_secret)"\' "$1" | sort) <(jq -r \'.results | keys[] as $key | "\\($key),\\(.[$key] | .[] | .hashed_secret)"\' "$2" | sort) >/dev/null; }\n        \n          # Check if there\'s any difference between the known and newly detected secrets\n          if ! compare_secrets .secrets.baseline .secrets.new; then\n            echo "\u26a0\ufe0f Attention Required! \u26a0\ufe0f" >&2\n            echo "New secrets have been detected in your recent commit. Due to security concerns, we cannot display detailed information here and we cannot proceed until this issue is resolved." >&2\n            echo "" >&2\n            echo "Please follow the steps below on your local machine to reveal and handle the secrets:" >&2\n            echo "" >&2\n            echo "1\ufe0f\u20e3 Run the \'detect-secrets\' tool on your local machine. This tool will identify and clean up the secrets. You can find detailed instructions at this link: https://nasa-ammos.github.io/slim/continuous-testing/starter-kits/#detect-secrets" >&2\n            echo "" >&2\n            echo "2\ufe0f\u20e3 After cleaning up the secrets, commit your changes and re-push your update to the repository." >&2\n            echo "" >&2\n            echo "Your efforts to maintain the security of our codebase are greatly appreciated!" >&2\n            exit 1\n          fi\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation")),(0,i.kt)("p",null,"The Detect Secrets Action follows these steps to ensure the security of your code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Checkout Code"),": Utilizes GitHub's checkout action to access the repository. This is the code that will be scanned for secrets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Install Necessary Packages"),": Deploys the required Python packages, including the experimental version of ",(0,i.kt)("inlineCode",{parentName:"li"},"slim-detect-secrets")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"jq"),". These packages enable the primary functionality of the Action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Check Existence of .secrets.baseline"),": Ensures the Action remains operational even if no baseline file exists yet. If the ",(0,i.kt)("inlineCode",{parentName:"li"},".secrets.baseline")," file is not found, the action creates an initial baseline file by scanning an empty directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scan Repository for Secrets"),": In this step, the Action backs up the list of known secrets and scans the repository for any new secrets. The scan excludes files starting with '.secrets.' and '.git'. The 'compare_secrets' function is used to identify any differences between the known secrets and newly detected ones. If new secrets are detected, the build fails, and the user is guided to clean up the secrets using the ",(0,i.kt)("inlineCode",{parentName:"li"},"detect-secrets")," tool.")),(0,i.kt)("p",null,"After this, GitHub will automatically run the workflow when you push to the branch or create a pull request."),(0,i.kt)("p",null,"This workflow will run the ",(0,i.kt)("inlineCode",{parentName:"p"},"detect-secrets")," tool on the GitHub server. If any new secrets are detected, it will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fail the status check"),(0,i.kt)("img",{width:"507",src:"https://github.com/NASA-AMMOS/slim/assets/92573736/bc7670f8-5bbb-414c-b9af-803be05efd67"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Print a message in the "Details" with instructions on how to resolve the issue'),(0,i.kt)("img",{width:"1627",src:"https://github.com/NASA-AMMOS/slim/assets/92573736/7e884d60-c972-46f2-9785-31b09cebb93f"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Send an email notification to the user"),(0,i.kt)("img",{width:"1192",src:"https://github.com/NASA-AMMOS/slim/assets/92573736/142e0693-f3f8-42c8-92d7-deb653bdb09c"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule"},"Protect your branch"))),(0,i.kt)("img",{width:"1107",src:"https://github.com/NASA-AMMOS/slim/assets/92573736/5a430b2f-7f9b-4ba0-a06a-7c53b300f08b"}),(0,i.kt)("p",null,"After this, if status check fails, GitHub will prevent the merge or push to the protected branch."),(0,i.kt)("img",{width:"918",src:"https://github.com/NASA-AMMOS/slim/assets/92573736/9f8b6239-840a-4ba4-9458-d795f46d7acd"}),(0,i.kt)("h2",{id:"attention-for-using-detect-secrets"},"Attention for using Detect Secrets"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"1.It does not ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yelp/detect-secrets/blob/master/docs/design.md#potentialsecret"},"show all the same type of secrets in a same file to minimize noise")),(0,i.kt)("p",{parentName:"blockquote"},"This means sometimes it will only show one secret in a file even if there are multiple ",(0,i.kt)("strong",{parentName:"p"},"same type of secrets")," in the same file.\nAudit tool will not show all the secrets due to this reason."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"->")," Thus, when you see a secret is detected, best practice is to ",(0,i.kt)("strong",{parentName:"p"},"manually")," check that file.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"2.Even though detect-secrets has strong secret-detect ability compared to other tools, it is still possible that detect-secrets will not show you a file that contains secrets due to a new type of secret not capable by current plugins."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"->")," Thus, the best practice is always to be careful as a developer and ",(0,i.kt)("strong",{parentName:"p"},"manually")," check the files that you think might contain secrets."),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"detect-secrets")," is a backup approach to minimize the chance of pushing secrets to the cloud."))),(0,i.kt)("h2",{id:"recommended-workflow"},"Recommended Workflow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"At least use layer 3 (Server-side push to GitHub.com) to protect the main branch from being pushed or merged if any secrets are detected."),(0,i.kt)("li",{parentName:"ol"},"If any secrets are detected during layer 3, you can:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Clean the commit history of the branch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To find out the files that needs clean, you can use layer 1's auditing feature as assistance"),(0,i.kt)("li",{parentName:"ul"},"If a secret has already been committed, visit\n",(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/removing-sensitive-data-from-a-repository"},"https://help.github.com/articles/removing-sensitive-data-from-a-repository")))))),(0,i.kt)("li",{parentName:"ol"},"Recommend to set up layer 2 (Git commit scan, client-side) for every developer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It can minimize the chance of pushing secrets to the cloud"),(0,i.kt)("li",{parentName:"ul"},"Local files are easier to clean than GitHub commit history"))),(0,i.kt)("li",{parentName:"ol"},"Layer 1 (Full scan and audit, client-side) can be involved during each stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It helps you generate, update or analyze baseline file for layer 2 and 3")))),(0,i.kt)("mermaid",{value:'sequenceDiagram\n    participant Dev as Developer\n    participant GH as GitHub\n    participant DS as Detect-Secrets\n    participant L1 as Layer 1 (Full Scan & Audit)\n    participant L2 as Layer 2 (Git Commit Scan)\n    participant L3 as Layer 3 (Server-side Push to GitHub)\n\n    Dev->>L3: Push/Merge to Main Branch\n    L3->>DS: Scan for Secrets\n    alt Secrets Detected in L3\n        DS--\x3e>Dev: Secrets Detected\n        Dev->>L1: Use Auditing Feature to Identify Files for Cleaning\n        Note over L1: Assists in identifying files that need to be cleaned. <br/> Recommend to manully double check detected files <br/> due to "minimize noise" feature from detect-secrets\n        Dev->>Dev: Clean Commit History\n        Note over Dev: If a secret has already been committed, refer: <br/> https://help.github.com/articles/removing-sensitive-data-from-a-repository\n        Dev->>L2: Set Up Git Commit Scan\n        Note over Dev, L2: Minimizes chances of pushing secrets <br/> Easier to clean local files than GitHub commit history\n        Dev->>L1: Use Full Scan & Audit at Each Stage\n        Note over Dev, L1: Assists in generating, updating or analyzing baseline file for L2 and L3\n        Dev->>L3: Retry Push/Merge to Main Branch\n    else No Secrets Detected\n        DS--\x3e>GH: No Secrets Detected\n        GH->>Dev: Allows Push/Merge to Main Branch\n    end\n'}),(0,i.kt)("h2",{id:"more-configurations"},"More Configurations"),(0,i.kt)("p",null,"Check out"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Yelp/detect-secrets"},"detect-secrets")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://pre-commit.com/"},"pre-commit"))))}d.isMDXComponent=!0}}]);