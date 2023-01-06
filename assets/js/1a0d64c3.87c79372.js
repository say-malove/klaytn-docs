"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[90],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>p});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,p=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(p,s(s({ref:n},h),{},{components:t})):a.createElement(p,s({ref:n},h))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const i={},s="Consensus Mechanism",r={unversionedId:"klaytn-overview/klaytn-design/consensus-mechanism",id:"klaytn-overview/klaytn-design/consensus-mechanism",title:"Consensus Mechanism",description:"A consensus mechanism (algorithm) is a way of reaching a consensus between trustless entities. In blockchain technology, it is used to reach a consensus about if a block is valid or not. The performance of blockchain networks relies on the performance of the adopted consensus mechanisms, and it has a significant impact on the perceived usability of the Blockchain Applications.",source:"@site/docs/klaytn-overview/klaytn-design/consensus-mechanism.md",sourceDirName:"klaytn-overview/klaytn-design",slug:"/klaytn-overview/klaytn-design/consensus-mechanism",permalink:"/docs/klaytn-overview/klaytn-design/consensus-mechanism",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/docs/klaytn-overview/klaytn-design/accounts"},next:{title:"Governance",permalink:"/docs/klaytn-overview/klaytn-design/governance"}},c={},l=[{value:'Background <a id="background"></a>',id:"background-",level:2},{value:'PBFT (Practical Byzantine Fault Tolerance)  <a id="pbft-practical-byzantine-fault-tolerance"></a>',id:"pbft-practical-byzantine-fault-tolerance--",level:3},{value:'Consensus Mechanism in Klaytn <a id="consensus-mechanism-in-klaytn"></a>',id:"consensus-mechanism-in-klaytn-",level:2}],h={toc:l};function u(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consensus-mechanism"},"Consensus Mechanism"),(0,o.kt)("p",null,"A consensus mechanism (algorithm) is a way of reaching a consensus between trustless entities. In blockchain technology, it is used to reach a consensus about if a block is valid or not. The performance of blockchain networks relies on the performance of the adopted consensus mechanisms, and it has a significant impact on the perceived usability of the Blockchain Applications."),(0,o.kt)("p",null,"Klaytn Mainnet Cypress exhibits the following performance."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Handles 4,000 transactions per second. "),(0,o.kt)("li",{parentName:"ul"},"Immediate transaction finality."),(0,o.kt)("li",{parentName:"ul"},"One-second block generation time. "),(0,o.kt)("li",{parentName:"ul"},"Over 50 consensus nodes can participate in the consensus process.")),(0,o.kt)("p",null,"In the document, we will go over how Klaytn implemented the high-performing consensus process. "),(0,o.kt)("h2",{id:"background-"},"Background ",(0,o.kt)("a",{id:"background"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bitcoin"},"Bitcoin")," and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ethereum"},"Ethereum")," are using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_work"},"PoW")," (Proof of Work) based consensus mechanism. And there are other blockchain networks using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_stake"},"PoS")," (Proof of Stake) mechanism which decides a block generating node by the stake of the node. Usually, these algorithms have no communication between nodes in deciding validities of blocks. "),(0,o.kt)("p",null,'So in these systems, a fork can happen which means two or more different blocks can be made on the same height. Usually "Longest chain wins" rule is used to solve the fork condition. It means that those forks will be merged into a single canonical chain eventually, but it also means a list of blocks can be reverted in some period of time when it belongs to the shorter chain. So in these algorithms, there is no guarantee of the finality of blocks and transactions. The finality only can be achieved probabilistically after some period of time though it can\'t be 100% sure.'),(0,o.kt)("p",null,"This lack of finality is a very difficult issue in customer-facing services which use a blockchain platform. Because it has to wait until forks are resolved and enough blocks are stacked after the transfer to believe the transaction is not reversible. This characteristic gives a negative effect both on users and service providers. "),(0,o.kt)("p",null,"A simple example of this issue is a financial service. Assuming that an user transferred some funds to someone, the service can't acknowledge that the transfer is valid until 30 to 60 minutes passed. Because it have to wait until forks are merged into a single chain and several blocks stacked after the transfer to believe the transaction is not reversible."),(0,o.kt)("h3",{id:"pbft-practical-byzantine-fault-tolerance--"},"PBFT (Practical Byzantine Fault Tolerance)  ",(0,o.kt)("a",{id:"pbft-practical-byzantine-fault-tolerance"})),(0,o.kt)("p",null,"To prevent the above issues, we need other algorithms that guarantee the finality. BFT algorithm is one of those, first ",(0,o.kt)("a",{parentName:"p",href:"https://dl.acm.org/citation.cfm?doid=357172.357176"},"published"),' in 1982 by Lamport, Shostak, Pease. In 1999, Miguel Castro and Barbara Liskov introduced "Practical Byzantine Fault Tolerance" (',(0,o.kt)("a",{parentName:"p",href:"http://www.pmg.csail.mit.edu/papers/bft-tocs.pdf"},"PBFT"),") which provides high-performance state machine replication."),(0,o.kt)("p",null,"In the PoW algorithm stated above, though each node receives and validates blocks, there are no message exchanges between nodes to reach a consensus. But in PBFT, each node communicates with other participating nodes to reach a consensus and the finality of the block can be guaranteed as soon as nodes were able to reach a consensus."),(0,o.kt)("p",null,"The communication between nodes basically progresses as shown below. But there are some variants which reflect each system's characteristics."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PBFT message flow",src:t(3937).Z,width:"539",height:"233"})),(0,o.kt)("p",null,"As shown above, a participating node in PBFT basically communicates with all nodes in the network in several phases. This characteristic limits the number of nodes because the communication volume increases exponentially as the number of nodes increases."),(0,o.kt)("h2",{id:"consensus-mechanism-in-klaytn-"},"Consensus Mechanism in Klaytn ",(0,o.kt)("a",{id:"consensus-mechanism-in-klaytn"})),(0,o.kt)("p",null,"Klaytn is aiming to be an Enterprise-ready and Service-centric platform. Therefore we need to solve the finality problem written above and the network should be able to allow many nodes to participate in the network. To make this possible, Klaytn is using an optimized version of Istanbul BFT, which implements PBFT with modifications to deal with blockchain network's characteristics."),(0,o.kt)("p",null,"In Klaytn, there are three types of nodes, CN (Consensus Node), PN (Proxy Node) and EN (Endpoint Node). CNs are managed by CCOs (Core Cell Operators) and are in charge of block generation. These blocks are verified by all nodes in the network. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/klaytn-overview/#klaytn-network-topology"},"here")," to know more about this network topology."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Network topology",src:t(8965).Z,width:"1500",height:"1100"})),(0,o.kt)("p",null,"Klaytn achieves fast finality by adopting and improving Istanbul BFT. Because validation and consensus are done for each block there is no fork and the block's finality is guaranteed instantly as soon as the consensus is made. "),(0,o.kt)("p",null,"And also the issue of increasing communication volume in the BFT algorithm is solved by utilizing randomly selected ",(0,o.kt)("inlineCode",{parentName:"p"},"Committee"),". CNs collectively form a ",(0,o.kt)("inlineCode",{parentName:"p"},"Council")," and on each block generation, part of them are selected as a member of ",(0,o.kt)("inlineCode",{parentName:"p"},"Committee")," using a VRF (Verifiable Random Function)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Concept of council and committee",src:t(8058).Z,width:"1086",height:"1030"})),(0,o.kt)("p",null,"Because consensus messages are exchanged only between the committee members, the communication volume can be limited under the designed level even though the total number of CNs increases."),(0,o.kt)("p",null,"Currently, Klaytn Mainnet Cypress can provide a high throughput of 4,000 transactions per second with one-second block generation interval. More than 50 consensus nodes can participate in the CNN (Consensus Node Network) at the moment and the number will continuously increase as Klaytn continues to aggressively optimize the algorithm."))}u.isMDXComponent=!0},8058:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/council-committee-c8632c7d5e543438264d2a2199b01d4e.png"},8965:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/klaytn_network_node-a1c56e9912c6e742778e91d3487f4906.png"},3937:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pbft-c23fd6098d8eced1e0046c5ee641619e.png"}}]);