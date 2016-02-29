Ext.data.JsonP.MainLoop({"tagname":"class","name":"MainLoop","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-MainLoop","members":{"cfg":[],"property":[],"method":[{"name":"getFPS","tagname":"method","owner":"MainLoop","meta":{},"id":"method-getFPS"},{"name":"getMaxAllowedFPS","tagname":"method","owner":"MainLoop","meta":{},"id":"method-getMaxAllowedFPS"},{"name":"getSimulationTimestep","tagname":"method","owner":"MainLoop","meta":{},"id":"method-getSimulationTimestep"},{"name":"isRunning","tagname":"method","owner":"MainLoop","meta":{},"id":"method-isRunning"},{"name":"resetFrameDelta","tagname":"method","owner":"MainLoop","meta":{},"id":"method-resetFrameDelta"},{"name":"setBegin","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-setBegin"},{"name":"setDraw","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-setDraw"},{"name":"setEnd","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-setEnd"},{"name":"setMaxAllowedFPS","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-setMaxAllowedFPS"},{"name":"setSimulationTimestep","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-setSimulationTimestep"},{"name":"setUpdate","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-setUpdate"},{"name":"start","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-start"},{"name":"stop","tagname":"method","owner":"MainLoop","meta":{"chainable":true},"id":"method-stop"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":110,"files":[{"filename":"mainloop.js","href":"mainloop.html#MainLoop"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/mainloop.html#MainLoop' target='_blank'>mainloop.js</a></div></pre><div class='doc-contents'><p>Manages the main loop that runs updates and rendering.</p>\n\n<p>The main loop is a core part of any application in which state changes\neven if no events are handled. In games, it is typically responsible for\ncomputing physics and AI as well as drawing the result on the screen.</p>\n\n<p>The body of this particular loop is run every time the browser is ready to\npaint another frame. The frequency with which this happens depends primarily\non the monitor's refresh rate, which is typically 60 frames per second. Most\napplications aim to run at 60 FPS for this reason, meaning that the main\nloop runs about once every 16.7 milliseconds. With this target, everything\nthat happens in the main loop (e.g. all updates and drawing) needs to occur\nwithin the \"budget\" of 16.7 milliseconds.  See\n<code><a href=\"#!/api/MainLoop-method-setSimulationTimestep\" rel=\"MainLoop-method-setSimulationTimestep\" class=\"docClass\">MainLoop.setSimulationTimestep</a>()</code> for more information about typical\nmonitor refresh rates and frame rate targets.</p>\n\n<p>The main loop can be started and stopped, but there can only be one MainLoop\n(except that each Web Worker can have its own MainLoop). There are four main\nparts of the loop: <a href=\"#!/api/MainLoop-method-setBegin\" rel=\"MainLoop-method-setBegin\" class=\"docClass\">begin</a>(), <a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>(),\n<a href=\"#!/api/MainLoop-method-setDraw\" rel=\"MainLoop-method-setDraw\" class=\"docClass\">draw</a>(), and <a href=\"#!/api/MainLoop-method-setEnd\" rel=\"MainLoop-method-setEnd\" class=\"docClass\">end</a>(), in that order. See the\nfunctions that set each of them for descriptions of what they are used for.\nNote that update() can run zero or more times per loop.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getFPS' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-getFPS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-getFPS' class='name expandable'>getFPS</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Returns the exponential moving average of the frames per second. ...</div><div class='long'><p>Returns the exponential moving average of the frames per second.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The exponential moving average of the frames per second.</p>\n</div></li></ul></div></div></div><div id='method-getMaxAllowedFPS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-getMaxAllowedFPS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-getMaxAllowedFPS' class='name expandable'>getMaxAllowedFPS</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the maximum frame rate. ...</div><div class='long'><p>Gets the maximum frame rate.</p>\n\n<p>Other factors also limit the FPS; see <code><a href=\"#!/api/MainLoop-method-setSimulationTimestep\" rel=\"MainLoop-method-setSimulationTimestep\" class=\"docClass\">MainLoop.setSimulationTimestep</a></code>\nfor details.</p>\n\n<p>See also <code><a href=\"#!/api/MainLoop-method-setMaxAllowedFPS\" rel=\"MainLoop-method-setMaxAllowedFPS\" class=\"docClass\">MainLoop.setMaxAllowedFPS</a>()</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The maximum number of frames per second allowed.</p>\n</div></li></ul></div></div></div><div id='method-getSimulationTimestep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-getSimulationTimestep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-getSimulationTimestep' class='name expandable'>getSimulationTimestep</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets how many milliseconds should be simulated by every run of update(). ...</div><div class='long'><p>Gets how many milliseconds should be simulated by every run of update().</p>\n\n<p>See <code><a href=\"#!/api/MainLoop-method-setSimulationTimestep\" rel=\"MainLoop-method-setSimulationTimestep\" class=\"docClass\">MainLoop.setSimulationTimestep</a>()</code> for details on this value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of milliseconds that should be simulated by every run of\n  <a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>().</p>\n</div></li></ul></div></div></div><div id='method-isRunning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-isRunning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-isRunning' class='name expandable'>isRunning</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns whether the main loop is currently running. ...</div><div class='long'><p>Returns whether the main loop is currently running.</p>\n\n<p>See also <code><a href=\"#!/api/MainLoop-method-start\" rel=\"MainLoop-method-start\" class=\"docClass\">MainLoop.start</a>()</code> and <code><a href=\"#!/api/MainLoop-method-stop\" rel=\"MainLoop-method-stop\" class=\"docClass\">MainLoop.stop</a>()</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the main loop is currently running.</p>\n</div></li></ul></div></div></div><div id='method-resetFrameDelta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-resetFrameDelta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-resetFrameDelta' class='name expandable'>resetFrameDelta</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Reset the amount of time that has not yet been simulated to zero. ...</div><div class='long'><p>Reset the amount of time that has not yet been simulated to zero.</p>\n\n<p>This introduces non-deterministic behavior if called after the\napplication has started running (unless it is being reset, in which case\nit doesn't matter). However, this can be useful in cases where the\namount of time that has not yet been simulated has grown very large\n(for example, when the application's tab gets put in the background and\nthe browser throttles the timers as a result). In applications with\nlockstep the player would get dropped, but in other networked\napplications it may be necessary to snap or ease the player/user to the\nauthoritative state and discard pending updates in the process. In\nnon-networked applications it may also be acceptable to simply resume\nthe application where it last left off and ignore the accumulated\nunsimulated time.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The cumulative amount of elapsed time in milliseconds that has not yet\n  been simulated, but is being discarded as a result of calling this\n  function.</p>\n</div></li></ul></div></div></div><div id='method-setBegin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-setBegin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-setBegin' class='name expandable'>setBegin</a>( <span class='pre'>begin</span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets the function that runs at the beginning of the main loop. ...</div><div class='long'><p>Sets the function that runs at the beginning of the main loop.</p>\n\n<p>The begin() function is typically used to process input before the\nupdates run. Processing input here (in chunks) can reduce the running\ntime of event handlers, which is useful because long-running event\nhandlers can sometimes delay frames.</p>\n\n<p>Unlike <a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>(), which can run zero or more times per\nframe, begin() always runs exactly once per frame. This makes it useful\nfor any updates that are not dependent on time in the simulation.\nExamples include adjusting HUD calculations or performing long-running\nupdates incrementally. Compared to <a href=\"#!/api/MainLoop-method-setEnd\" rel=\"MainLoop-method-setEnd\" class=\"docClass\">end</a>(), generally\nactions should occur in begin() if they affect anything that\n<a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>() or <a href=\"#!/api/MainLoop-method-setDraw\" rel=\"MainLoop-method-setDraw\" class=\"docClass\">draw</a>() use.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>begin</span> : Function<div class='sub-desc'><p>The begin() function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timestamp</span> : Number (optional)<div class='sub-desc'><p>The current timestamp (when the frame started), in milliseconds. This\n  should only be used for comparison to other timestamps because the\n  epoch (i.e. the \"zero\" time) depends on the engine running this code.\n  In engines that support <code>DOMHighResTimeStamp</code> (all modern browsers\n  except iOS Safari 8) the epoch is the time the page started loading,\n  specifically <code>performance.timing.navigationStart</code>. Everywhere else,\n  including node.js, the epoch is the Unix epoch (1970-01-01T00:00:00Z).</p>\n</div></li><li><span class='pre'>delta</span> : Number (optional)<div class='sub-desc'><p>The total elapsed time that has not yet been simulated, in\n  milliseconds.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setDraw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-setDraw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-setDraw' class='name expandable'>setDraw</a>( <span class='pre'>draw</span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets the function that draws things on the screen. ...</div><div class='long'><p>Sets the function that draws things on the screen.</p>\n\n<p>The draw() function gets passed the percent of time that the next run of\n<a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>() will simulate that has actually elapsed, as\na decimal. In other words, draw() gets passed how far between update()\ncalls it is. This is useful because the time simulated by update() and\nthe time between draw() calls is usually different, so the parameter to\ndraw() can be used to interpolate motion between frames to make\nrendering appear smoother. To illustrate, if update() advances the\nsimulation at each vertical bar in the first row below, and draw() calls\nhappen at each vertical bar in the second row below, then some frames\nwill have time left over that is not yet simulated by update() when\nrendering occurs in draw():</p>\n\n<pre><code>update() timesteps:  |  |  |  |  |  |  |  |  |\ndraw() calls:        |   |   |   |   |   |   |\n</code></pre>\n\n<p>To interpolate motion for rendering purposes, objects' state after the\nlast update() must be retained and used to calculate an intermediate\nstate. Note that this means renders will be up to one update() behind.\nThis is still better than extrapolating (projecting objects' state after\na future update()) which can produce bizarre results. Storing multiple\nstates can be difficult to set up, and keep in mind that running this\nprocess takes time that could push the frame rate down, so it's often\nnot worthwhile unless stuttering is visible.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>draw</span> : Function<div class='sub-desc'><p>The draw() function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interpolationPercentage</span> : Number (optional)<div class='sub-desc'><p>The cumulative amount of time that hasn't been simulated yet, divided\n  by the amount of time that will be simulated the next time update()\n  runs. Useful for interpolating frames.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-setEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-setEnd' class='name expandable'>setEnd</a>( <span class='pre'>end</span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets the function that runs at the end of the main loop. ...</div><div class='long'><p>Sets the function that runs at the end of the main loop.</p>\n\n<p>Unlike <a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>(), which can run zero or more times per\nframe, end() always runs exactly once per frame. This makes it useful\nfor any updates that are not dependent on time in the simulation.\nExamples include cleaning up any temporary state set up by\n<a href=\"#!/api/MainLoop-method-setBegin\" rel=\"MainLoop-method-setBegin\" class=\"docClass\">begin</a>(), lowering the visual quality if the frame rate\nis too low, or performing long-running updates incrementally. Compared\nto begin(), generally actions should occur in end() if they use anything\nthat update() or <a href=\"#!/api/MainLoop-method-setDraw\" rel=\"MainLoop-method-setDraw\" class=\"docClass\">draw</a>() affect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>end</span> : Function<div class='sub-desc'><p>The end() function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fps</span> : Number (optional)<div class='sub-desc'><p>The exponential moving average of the frames per second. This is the\n  same value returned by <code><a href=\"#!/api/MainLoop-method-getFPS\" rel=\"MainLoop-method-getFPS\" class=\"docClass\">MainLoop.getFPS</a>()</code>. It can be used to take\n  action when the FPS is too low (or to restore to normalcy if the FPS\n  moves back up). Examples of actions to take if the FPS is too low\n  include exiting the application, lowering the visual quality, stopping\n  or reducing activities outside of the main loop like event handlers or\n  audio playback, performing non-critical updates less frequently, or\n  increasing the simulation timestep (by calling\n  <code><a href=\"#!/api/MainLoop-method-setSimulationTimestep\" rel=\"MainLoop-method-setSimulationTimestep\" class=\"docClass\">MainLoop.setSimulationTimestep</a>()</code>). Note that this last option\n  results in more time being simulated per update() call, which causes\n  the application to behave non-deterministically.</p>\n</div></li><li><span class='pre'>panic</span> : Boolean (optional)<div class='sub-desc'><p>Indicates whether the simulation has fallen too far behind real time.\n  Specifically, <code>panic</code> will be <code>true</code> if too many updates occurred in\n  one frame. In networked lockstep applications, the application should\n  wait for some amount of time to see if the user can catch up before\n  dropping the user. In networked but non-lockstep applications, this\n  typically indicates that the user needs to be snapped or eased to the\n  current authoritative state. When this happens, it may be convenient\n  to call <code><a href=\"#!/api/MainLoop-method-resetFrameDelta\" rel=\"MainLoop-method-resetFrameDelta\" class=\"docClass\">MainLoop.resetFrameDelta</a>()</code> to discard accumulated pending\n  updates. In non-networked applications, it may be acceptable to allow\n  the application to keep running for awhile to see if it will catch up.\n  However, this could also cause the application to look like it is\n  running very quickly for a few frames as it transitions through the\n  intermediate states. An alternative that may be acceptable is to\n  simply ignore the unsimulated elapsed time by calling\n  <code><a href=\"#!/api/MainLoop-method-resetFrameDelta\" rel=\"MainLoop-method-resetFrameDelta\" class=\"docClass\">MainLoop.resetFrameDelta</a>()</code> even though this introduces\n  non-deterministic behavior. In all cases, if the application panics\n  frequently, this is an indication that the main loop is running too\n  slowly. However, most of the time the drop in frame rate will probably\n  be noticeable before a panic occurs. To help the application catch up\n  after a panic caused by a spiral of death, the same steps can be taken\n  that are suggested above if the FPS drops too low.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setMaxAllowedFPS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-setMaxAllowedFPS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-setMaxAllowedFPS' class='name expandable'>setMaxAllowedFPS</a>( <span class='pre'>[fps]</span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets a maximum frame rate. ...</div><div class='long'><p>Sets a maximum frame rate.</p>\n\n<p>See also <code><a href=\"#!/api/MainLoop-method-getMaxAllowedFPS\" rel=\"MainLoop-method-getMaxAllowedFPS\" class=\"docClass\">MainLoop.getMaxAllowedFPS</a>()</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fps</span> : Number (optional)<div class='sub-desc'><p>The maximum number of frames per second to execute. If Infinity or not\n  passed, there will be no FPS cap (although other factors do limit the\n  FPS; see <code><a href=\"#!/api/MainLoop-method-setSimulationTimestep\" rel=\"MainLoop-method-setSimulationTimestep\" class=\"docClass\">MainLoop.setSimulationTimestep</a></code> for details). If zero, this\n  will stop the loop, and when the loop is next started, it will return\n  to the previous maximum frame rate. Passing negative values will stall\n  the loop until this function is called again with a positive value.</p>\n<p>Defaults to: <code>Infinity</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setSimulationTimestep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-setSimulationTimestep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-setSimulationTimestep' class='name expandable'>setSimulationTimestep</a>( <span class='pre'>timestep</span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets how many milliseconds should be simulated by every run of update(). ...</div><div class='long'><p>Sets how many milliseconds should be simulated by every run of update().</p>\n\n<p>The perceived frames per second (FPS) is effectively capped at the\nmultiplicative inverse of the simulation timestep. That is, if the\ntimestep is 1000 / 60 (which is the default), then the maximum perceived\nFPS is effectively 60. Decreasing the timestep increases the maximum\nperceived FPS at the cost of running <a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>() more\ntimes per frame at lower frame rates. Since running update() more times\ntakes more time to process, this can actually slow down the frame rate.\nAdditionally, if the amount of time it takes to run update() exceeds or\nvery nearly exceeds the timestep, the application will freeze and crash\nin a spiral of death (unless it is rescued; see <code><a href=\"#!/api/MainLoop-method-setEnd\" rel=\"MainLoop-method-setEnd\" class=\"docClass\">MainLoop.setEnd</a>()</code> for\nan explanation of what can be done if a spiral of death is occurring).</p>\n\n<p>The exception to this is that interpolating between updates for each\nrender can increase the perceived frame rate and reduce visual\nstuttering. See <code><a href=\"#!/api/MainLoop-method-setDraw\" rel=\"MainLoop-method-setDraw\" class=\"docClass\">MainLoop.setDraw</a>()</code> for an explanation of how to do\nthis.</p>\n\n<p>If you are considering decreasing the simulation timestep in order to\nraise the maximum perceived FPS, keep in mind that most monitors can't\ndisplay more than 60 FPS. Whether humans can tell the difference among\nhigh frame rates depends on the application, but for reference, film is\nusually displayed at 24 FPS, other videos at 30 FPS, most games are\nacceptable above 30 FPS, and virtual reality might require 75 FPS to\nfeel natural. Some gaming monitors go up to 144 FPS. Setting the\ntimestep below 1000 / 144 is discouraged and below 1000 / 240 is\nstrongly discouraged. The default of 1000 / 60 is good in most cases.</p>\n\n<p>The simulation timestep should typically only be changed at\ndeterministic times (e.g. before the main loop starts for the first\ntime, and not in response to user input or slow frame rates) to avoid\nintroducing non-deterministic behavior. The update timestep should be\nthe same for all players/users in multiplayer/multi-user applications.</p>\n\n<p>See also <code><a href=\"#!/api/MainLoop-method-getSimulationTimestep\" rel=\"MainLoop-method-getSimulationTimestep\" class=\"docClass\">MainLoop.getSimulationTimestep</a>()</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timestep</span> : Number<div class='sub-desc'><p>The number of milliseconds that should be simulated by every run of\n  <a href=\"#!/api/MainLoop-method-setUpdate\" rel=\"MainLoop-method-setUpdate\" class=\"docClass\">update</a>().</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-setUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-setUpdate' class='name expandable'>setUpdate</a>( <span class='pre'>update</span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets the function that runs updates (e.g. ...</div><div class='long'><p>Sets the function that runs updates (e.g. AI and physics).</p>\n\n<p>The update() function should simulate anything that is affected by time.\nIt can be called zero or more times per frame depending on the frame\nrate.</p>\n\n<p>As with everything in the main loop, the running time of update()\ndirectly affects the frame rate. If update() takes long enough that the\nframe rate drops below the target (\"budgeted\") frame rate, parts of the\nupdate() function that do not need to execute between every frame can be\nmoved into Web Workers. (Various sources on the internet sometimes\nsuggest other scheduling patterns using setTimeout() or setInterval().\nThese approaches sometimes offer modest improvements with minimal\nchanges to existing code, but because JavaScript is single-threaded, the\nupdates will still block rendering and drag down the frame rate. Web\nWorkers execute in separate threads, so they free up more time in the\nmain loop.)</p>\n\n<p>This script can be imported into a Web Worker using importScripts() and\nused to run a second main loop in the worker. Some considerations:</p>\n\n<ul>\n<li>Profile your code before doing the work to move it into Web Workers.\nIt could be the rendering that is the bottleneck, in which case the\nsolution is to decrease the visual complexity of the scene.</li>\n<li>It doesn't make sense to move the <em>entire</em> contents of update() into\nworkers unless <a href=\"#!/api/MainLoop-method-setDraw\" rel=\"MainLoop-method-setDraw\" class=\"docClass\">draw</a>() can interpolate between frames.\nThe lowest-hanging fruit is background updates (like calculating\ncitizens' happiness in a city-building game), physics that doesn't\naffect the scene (like flags waving in the wind), and anything that is\noccluded or happening far off screen.</li>\n<li>If draw() needs to interpolate physics based on activity that occurs\nin a worker, the worker needs to pass the interpolation value back to\nthe main thread so that is is available to draw().</li>\n<li>Web Workers can't access the state of the main thread, so they can't\ndirectly modify objects in your scene. Moving data to and from Web\nWorkers is a pain. The fastest way to do it is with Transferable\nObjects: basically, you can pass an ArrayBuffer to a worker,\ndestroying the original reference in the process.</li>\n</ul>\n\n\n<p>You can read more about Web Workers and Transferable Objects at\n<a href=\"http://www.html5rocks.com/en/tutorials/workers/basics/\">HTML5 Rocks</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>update</span> : Function<div class='sub-desc'><p>The update() function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delta</span> : Number (optional)<div class='sub-desc'><p>The amount of time in milliseconds to simulate in the update. In most\n  cases this timestep never changes in order to ensure deterministic\n  updates. The timestep is the same as that returned by\n  <code><a href=\"#!/api/MainLoop-method-getSimulationTimestep\" rel=\"MainLoop-method-getSimulationTimestep\" class=\"docClass\">MainLoop.getSimulationTimestep</a>()</code>.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-start' class='name expandable'>start</a>( <span class='pre'></span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Starts the main loop. ...</div><div class='long'><p>Starts the main loop.</p>\n\n<p>Note that the application is not considered \"running\" immediately after\nthis function returns; rather, it is considered \"running\" after the\napplication draws its first frame. The distinction is that event\nhandlers should remain paused until the application is running, even\nafter <code><a href=\"#!/api/MainLoop-method-start\" rel=\"MainLoop-method-start\" class=\"docClass\">MainLoop.start</a>()</code> is called. Check <code><a href=\"#!/api/MainLoop-method-isRunning\" rel=\"MainLoop-method-isRunning\" class=\"docClass\">MainLoop.isRunning</a>()</code> for the\ncurrent status. To act after the application starts, register a callback\nwith requestAnimationFrame() after calling this function and execute the\naction in that callback. It is safe to call <code><a href=\"#!/api/MainLoop-method-start\" rel=\"MainLoop-method-start\" class=\"docClass\">MainLoop.start</a>()</code> multiple\ntimes even before the application starts running and without calling\n<code><a href=\"#!/api/MainLoop-method-stop\" rel=\"MainLoop-method-stop\" class=\"docClass\">MainLoop.stop</a>()</code> in between, although there is no reason to do this;\nthe main loop will only start if it is not already started.</p>\n\n<p>See also <code><a href=\"#!/api/MainLoop-method-stop\" rel=\"MainLoop-method-stop\" class=\"docClass\">MainLoop.stop</a>()</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MainLoop'>MainLoop</span><br/><a href='source/mainloop.html#MainLoop-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MainLoop-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> ) : <a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Stops the main loop. ...</div><div class='long'><p>Stops the main loop.</p>\n\n<p>Event handling and other background tasks should also be paused when the\nmain loop is paused.</p>\n\n<p>Note that pausing in multiplayer/multi-user applications will cause the\nplayer's/user's client to become out of sync. In this case the\nsimulation should exit, or the player/user needs to be snapped to their\nupdated position when the main loop is started again.</p>\n\n<p>See also <code><a href=\"#!/api/MainLoop-method-start\" rel=\"MainLoop-method-start\" class=\"docClass\">MainLoop.start</a>()</code> and <code><a href=\"#!/api/MainLoop-method-isRunning\" rel=\"MainLoop-method-isRunning\" class=\"docClass\">MainLoop.isRunning</a>()</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MainLoop\" rel=\"MainLoop\" class=\"docClass\">MainLoop</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});