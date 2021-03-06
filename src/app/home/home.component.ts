import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened: boolean

// ============== TODO: Store this hardcoded data somewhere else ==============

  optFlags = `opt -mem2reg
    -O0
    -instcount
    -load VarCounter.so -VarCounter
    -load EdgeCounter.so -EdgeCounter
    -stats
    -S \${lnk_name}
    -disable-output 2>> stats.txt`

// Table with feature examples
  cols = ['name', 'descHTML']
  dataSource = [
    { name : 'Number of store instructions',  descHTML : 'How many store operations appear in the <a class="anghaTheme" href="https://en.wikipedia.org/wiki/LLVM#Intermediate_representation" target="blank">LLVM representation</a> of the program.'                                                               },
    { name : 'Number of load instructions',   descHTML : 'How many load operations appear in the LLVM representation of the program.'                                                                },
    { name : 'Number of basic blocks',        descHTML : 'Number of <a class="anghaTheme" href="https://en.wikipedia.org/wiki/Basic_block" target="blank">basic blocks</a> in the LLVM representation of the program.'  },
    { name : 'Number of instructions',        descHTML : 'Quantity of LLVM instructions in the intermediate representation of each program.'                                                         },
    { name : 'Number of named variables',     descHTML : 'Quantity of <a class="anghaTheme" href="https://en.wikipedia.org/wiki/Static_single_assignment_form" target="blank">SSA-form</a> variables in the LLVM representation of each program.'                                                                },
    { name : 'Number of variable uses',       descHTML : 'Sum of the number of times that each named variable appears as an operand in some instruction in the LLVM representation of the program.'  },
    { name : 'Number of edges',               descHTML : 'Number of edges in the <a class="anghaTheme" href="https://en.wikipedia.org/wiki/Control-flow_graph" target="blank">Control Flow Graph</a> of each program.'  },
  ]
// ============================================================================

  constructor() {}

  ngOnInit() {}
}
