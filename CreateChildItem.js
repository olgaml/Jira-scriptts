const exampleBtn = document.getElementById('createGlobalItem');

exampleBtn.addEventListener('click', () => {
  alert('start');
  //window.open('https://olgame.atlassian.net/jira/secure/CreateIssue.jspa', '_blank');
//window.open('https://olgame.atlassian.net/jira/secure/CreateIssue.jspa',"Ratting","width=550,height=170,left=150,top=200,toolbar=0,status=0,");
 //var newmenubar= document.getElementById('ak-jira-navigation');
  //newmenubar.style.display = 'none';
  window.open('https://olgame.atlassian.net/jira/secure/CreateIssue.jspa?issuetype=10011&pid=10002&customfield_10014=MSP-16','New Issue','width=600,height=600,location=no,toolbar=no,menubar=no' );
 //newmenubar= document.getElementById('ak-jira-navigation');
  //newmenubar.style.display = 'none';
  alert('end');
});
