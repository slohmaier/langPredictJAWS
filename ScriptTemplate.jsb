JFW Script File                                                           ?G  ?     registryread           Wscript.Shell     createobject    '  %    %     regread '  %    %    expandenvironmentstrings    '  %  '  %     	      ?     getwindowsversion    HKEY_LOCAL_MACHINE  '    SOFTWARE\Microsoft\Windows NT\CurrentVersion    '   ProductName '     %    \   
  %  
   \   
  %  
    registryread       	      ?     getjawsversion       getjawsdirectory    '      %    JAWS      stringcontains  '     %   %     %     stringlength      substring   '      %    \          stringreplacechars  '   %      	      ?    getmsaastatetext       %        
     %   unavailable     
  '     %        
     %   selected    
  '     %        
     %   focused     
  '     %        
     %   pressed     
  '     %        
     %   checked     
  '     %         
     %   mixed   
  '     %     @   
     %   readonly    
  '     %     ?   
     %   hottracked  
  '     %        
     %   default     
  '     %        
     %   expanded    
  '     %        
     %   collapsed   
  '     %        
     %   busy    
  '     %        
     %   floating    
  '     %         
     %   marqueed    
  '     %      @  
     %   animated    
  '     %      ?  
     %   invisible   
  '     %        
     %   offscreen   
  '     %        
     %   sizeable    
  '     %        
     %   moveable    
  '     %        
     %   selfvoicing     
  '     %        
     %   focusable   
  '     %         
     %   selectable  
  '     %       @ 
     %   linked  
  '     %       ? 
     %   traversed   
  '     %        
     %   multiselectable     
  '     %        
     %   extselectable   
  '     %        
     %   alert_low   
  '     %        
     %   alert_medium    
  '     %        
     %   alert_high  
  '     %     ???
     %   protected   
  '     %     ???
     %   valid   
  '        %    stringtrimtrailingblanks    '  %     	      ?    getmsaainfo     MSAA Children   '     %    getcurrentobject    '  %        
      MSAA Ancestors  '  %      accparent       accparent   '     %        
      MSAA Siblings   '  %      accparent   '     %      accchildcount   '  %   
  
       getjawsversion  
    on     
       getwindowsversion   
   
  
  '  %     %    inttostring 
    Children   
   
  
  '        '  %  %  
     %        
      
  %  
   Parent ID=  
     %    inttostring 
   
  
  '      
  %  
   ID= 
     %    inttostring 
   
  
  '        %    %    accrole   getroletext '     %    stringisblank        %   Role=   
  %  
   
   
  '     %    %    accname '     %    stringisblank        %   Name=   
  %  
   
   
  '     %    %    accvalue    '     %    stringisblank        %   Value=  
  %  
   
   
  '     %    %    accfocus    '  %     %   Focus=  
     %    inttostring 
   
   
  '        %    %    accstate      getmsaastatetext    ' 	    % 	   stringisblank        %   State=  
  % 	 
   
   
  '     %    %    acchelp ' 
    % 
   stringisblank        %   Help=   
  % 
 
   
   
  '     %    %    accdescription  '     %    stringisblank        %   Description=    
  %  
   
   
  '     %    %    acckeyboardshortcut '     %    stringisblank        %   KeyboardShortcut=   
  %  
   
   
  '     %    %    accdefaultaction    '     %    stringisblank        %   DefaultAction=  
  %  
   
   
  '     %    %    accchildcount   '  %     %   Children=   
     %    inttostring 
   
   
  '     %       
  '   ?   %  '        %    stringtrimtrailingblanks      stringtrimleadingblanks '  %     	      |     $showmsaaancestors      Show      saystring                getmsaainfo '      %     showvirtual       |     $showmsaasiblings       Show      saystring                getmsaainfo '      %     showvirtual       |     $showmsaachildren       Show      saystring                 getmsaainfo '      %     showvirtual       ?    showvirtual       %     stringlength      `?  
 
        Text too large for virtual viewer, so copying to clipboard instead    saystring         %     copytoclipboard    	      %   

 

Press Escape to close this message  
  '        userbufferdeactivate            userbufferclear       %     userbufferaddtext           userbufferactivate          jawstopoffile           sayline       ?     $toggledebugmode    $  bdebugmode         No debug mode     saystring            &  bdebugmode         Debug mode on     saystring           &  bdebugmode        `     sayifdebug      $  bdebugmode  # 8 %    
        %     saystring            $     iscontext1           	      $     iscontext2           	           $testcode      ?     activeitemchangedevent              ActiveItemChangedEvent  %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %    activeitemchangedevent     	         ?     applicationmodeevent           ApplicationModeEvent    %    sayifdebug          iscontext1             iscontext2           %     applicationmodeevent       	         ?     appwillnotspeakevent           AppWillNotSpeakEvent    %    sayifdebug          iscontext1             iscontext2           %     appwillnotspeakevent       	         ?     autofinishevent     AutoFinishEvent %     sayifdebug          iscontext1             iscontext2             autofinishevent    	         ?     autostartevent      AutoStartEvent  %     sayifdebug          iscontext1             iscontext2             autostartevent     	         ?     bottomedgeevent        BottomEdgeEvent %    sayifdebug          iscontext1             iscontext2           %     bottomedgeevent    	         ?     clipboardchangedevent       ClipboardChangedEvent   %     sayifdebug          iscontext1             iscontext2             clipboardchangedevent      	         ?     controllermodechangedevent         ControllerModeChangedEvent  %    sayifdebug          iscontext1             iscontext2           %     controllermodechangedevent     	         ?     crossedlistboundaryevent        CrossedListBoundaryEvent    %     sayifdebug          iscontext1             iscontext2             crossedlistboundaryevent       	         ?     crossedtableboundaryevent             CrossedTableBoundaryEvent   %    sayifdebug          iscontext1             iscontext2           %   %  %  %    crossedtableboundaryevent      	         ?     cursorshapechangedevent        CursorShapeChangedEvent %    sayifdebug          iscontext1             iscontext2           %     cursorshapechangedevent    	         ?     descriptionchangedevent             DescriptionChangedEvent %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %    descriptionchangedevent    	         ?     dialogpagechangedevent          DialogPageChangedEvent  %    sayifdebug          iscontext1             iscontext2              ?     documentloadedevent     DocumentLoadedEvent %     sayifdebug          iscontext1             iscontext2             documentloadedevent    	         ?     explorerpanefocuschangedevent           ExplorerPaneFocusChangedEvent   %    sayifdebug          iscontext1             iscontext2           %   %    explorerpanefocuschangedevent      	         ?     focuschangedevent           FocusChangedEvent   %    sayifdebug          iscontext1             iscontext2           %   %    focuschangedevent      	         ?     focuspointmovedevent                 FocusPointMovedEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %  %    focuspointmovedevent       	         ?     foregroundiconicevent          ForegroundIconicEvent   %    sayifdebug          iscontext1             iscontext2              ?     foregroundwindowchangedevent           ForegroundWindowChangedEvent    %    sayifdebug          iscontext1             iscontext2           %     foregroundwindowchangedevent       	         ?     formsmodeevent         FormsModeEvent  %    sayifdebug          iscontext1             iscontext2           %     formsmodeevent     	         ?     frameloadedevent             FrameLoadedEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %    frameloadedevent       	         ?     helpballoonevent            HelpBalloonEvent    %    sayifdebug          iscontext1             iscontext2           %   %    helpballoonevent       	         ?     internalframechangedevent            InternalFrameChangedEvent   %    sayifdebug          iscontext1             iscontext2           %   %  %    internalframechangedevent      	         ?     itemnotfoundevent          ItemNotFoundEvent   %    sayifdebug          iscontext1             iscontext2           %     itemnotfoundevent      	         ?     javafocuschangedevent           JavaFocusChangedEvent   %    sayifdebug          iscontext1             iscontext2           %   %    javafocuschangedevent      	         ?     keyboardlanguagechangedevent             KeyboardLanguageChangedEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %    keyboardlanguagechangedevent       	         ?     keymapchangedevent           KeymapChangedEvent  %    sayifdebug          iscontext1             iscontext2           %   %  %    keymapchangedevent     	         ?     keypressedevent           KeyPressedEvent %    sayifdebug          iscontext1             iscontext2           %   %  %  %    keypressedevent    	         ?     linespacingchangedevent         LineSpacingChangedEvent %    sayifdebug          iscontext1             iscontext2           %   %    linespacingchangedevent    	         ?     menumodeevent           MenuModeEvent   %    sayifdebug          iscontext1             iscontext2           %   %    menumodeevent      	         ?     mousebuttonevent             MouseButtonEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %    mousebuttonevent       	         ?     mousemovedevent         MouseMovedEvent %    sayifdebug          iscontext1             iscontext2           %   %    mousemovedevent    	         ?     msaaalertevent            MSAAAlertEvent  %    sayifdebug          iscontext1             iscontext2           %   %  %  %    msaaalertevent     	         ?     namechangedevent                NameChangedEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %    namechangedevent       	         ?     navigationwrappedevent         NavigationWrappedEvent  %    sayifdebug          iscontext1             iscontext2           %     navigationwrappedevent     	         ?     newtextevent                 NewTextEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %  %    newtextevent       	         ?     objstatechangedevent               ObjStateChangedEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %    objstatechangedevent       	         ?     pagechangedevent            PageChangedEvent    %    sayifdebug          iscontext1             iscontext2           %   %    pagechangedevent       	             pagesectioncolumnchangedevent                 PageSectionColumnChangedEvent   %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %  %  %    pagesectioncolumnchangedevent      	         ?     processeventonfocuschangedevent            ProcessEventOnFocusChangedEvent %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %    processeventonfocuschangedevent    	         ?     progressbarchangedevent          ProgressBarChangedEvent %    sayifdebug          iscontext1             iscontext2           %   %  %    progressbarchangedevent    	         ?   	  remotecontrollermodechangedevent          		 RemoteControllerModeChangedEvent    %    sayifdebug          iscontext1             iscontext2           %   	  remotecontrollermodechangedevent       	         ?     sayallstoppedevent      SayAllStoppedEvent  %     sayifdebug          iscontext1             iscontext2             sayallstoppedevent     	         ?     saylasttipfromevent     SayLastTipFromEvent %     sayifdebug          iscontext1             iscontext2             saylasttipfromevent    	         ?     screenstabilizedevent          ScreenStabilizedEvent   %    sayifdebug          iscontext1             iscontext2           %     screenstabilizedevent      	         ?     skimreadstoppedevent             SkimReadStoppedEvent    %    sayifdebug          iscontext1             iscontext2           %   %  %    skimreadstoppedevent       	         ?     speechtoggledevent         SpeechToggledEvent  %    sayifdebug          iscontext1             iscontext2           %     speechtoggledevent     	         ?     tableenteredevent                  TableEnteredEvent   % 	   sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %  %  %  %    tableenteredevent      	         ?     tableexitedevent        TableExitedEvent    %     sayifdebug          iscontext1             iscontext2             tableexitedevent       	         ?     tabstopevent           TabStopEvent    %    sayifdebug          iscontext1             iscontext2           %     tabstopevent       	         ?     tandemconnectionevent           TandemConnectionEvent   %    sayifdebug          iscontext1             iscontext2           %   %    tandemconnectionevent      	         ?     textselectedevent            TextSelectedEvent   %    sayifdebug          iscontext1             iscontext2           %   %  %    textselectedevent      	         ?     tooltipevent            TooltipEvent    %    sayifdebug          iscontext1             iscontext2           %   %    tooltipevent       	         ?     topedgeevent           TopEdgeEvent    %    sayifdebug          iscontext1             iscontext2           %     topedgeevent       	         ?     tutormessageevent           tutorMessageEvent   %    sayifdebug          iscontext1             iscontext2           %   %    tutormessageevent      	         ?     valuechangedevent                ValueChangedEvent   %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %  %  %    valuechangedevent      	         ?     videotoggledevent          VideoToggledEvent   %    sayifdebug          iscontext1             iscontext2           %     videotoggledevent      	         ?     windowactivatedevent           WindowActivatedEvent    %    sayifdebug          iscontext1             iscontext2           %     windowactivatedevent       	         ?     windowcreatedevent             WindowCreatedEvent  %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %    windowcreatedevent     	         ?     windowdestroyedevent           WindowDestroyedEvent    %    sayifdebug          iscontext1             iscontext2           %     windowdestroyedevent       	         ?     windowminmaxevent            WindowMinMaxEvent   %    sayifdebug          iscontext1             iscontext2           %   %  %    windowminmaxevent      	         ?     windowresizedevent             WindowResizedEvent  %    sayifdebug          iscontext1             iscontext2           %   %  %  %  %    windowresizedevent     	         