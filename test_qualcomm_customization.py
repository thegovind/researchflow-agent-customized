#!/usr/bin/env python3
"""
Qualcomm ResearchFlow Agent Customization Test
Validates that the Qualcomm-specific customizations have been properly applied.
"""

import os
import sys
import yaml
import re

def load_agent_file(filepath):
    """Load and parse an agent file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Parse the agent file (similar to YAML but with specific format)
        lines = content.strip().split('\n')
        agent_data = {}
        current_key = None
        current_value = []
        
        for line in lines:
            if line.startswith('name:'):
                agent_data['name'] = line.split(':', 1)[1].strip()
            elif line.startswith('description:'):
                agent_data['description'] = line.split(':', 1)[1].strip()
            elif line.startswith('instructions:'):
                # Start collecting multi-line instructions
                current_key = 'instructions'
                current_value = []
            elif line.startswith('  ') and current_key == 'instructions':
                # Continue collecting instructions
                current_value.append(line[2:])  # Remove 2-space indent
            elif current_key == 'instructions' and not line.startswith('  '):
                # End of instructions block
                agent_data[current_key] = '\n'.join(current_value)
                current_key = None
                current_value = []
                
        # Handle case where instructions is the last section
        if current_key == 'instructions':
            agent_data[current_key] = '\n'.join(current_value)
            
        return agent_data
    except Exception as e:
        print(f"Error loading {filepath}: {e}")
        return None

def test_agent_customizations():
    """Test that all agents have been properly customized for Qualcomm."""
    
    print("🔷 Testing Qualcomm ResearchFlow Agent Customizations\n")
    
    # Define expected customizations
    expected_agents = {
        'QualcommLedgerFacts': {
            'keywords': ['Qualcomm', 'semiconductor', 'manufacturing', 'technical'],
            'description_contains': ['Qualcomm', 'semiconductor']
        },
        'QualcommLedgerPlanner': {
            'keywords': ['Qualcomm', 'semiconductor', 'strategic', 'SemiAnalysis'],
            'description_contains': ['Qualcomm', 'strategic']
        },
        'QualcommFinalStepAgent': {
            'keywords': ['Qualcomm', 'SemiAnalysis', 'technical analysis'],
            'description_contains': ['Qualcomm', 'SemiAnalysis']
        },
        'QualcommProgressLedger': {
            'keywords': ['Qualcomm', 'semiconductor', 'research workflow'],
            'description_contains': ['Qualcomm', 'semiconductor']
        },
        'QualcommActionRouterAgent': {
            'keywords': ['Qualcomm', 'semiconductor research', 'intelligent routing'],
            'description_contains': ['Qualcomm', 'semiconductor']
        },
        'QualcommLedgerFactsUpdate': {
            'keywords': ['Qualcomm', 'semiconductor research'],
            'description_contains': ['Qualcomm', 'semiconductor']
        },
        'QualcommLedgerPlanUpdate': {
            'keywords': ['Qualcomm', 'semiconductor research', 'adaptive'],
            'description_contains': ['Qualcomm', 'semiconductor']
        }
    }
    
    core_path = '/home/runner/work/researchflow-agent-customized/researchflow-agent-customized/Core'
    
    test_results = {
        'passed': 0,
        'failed': 0,
        'details': []
    }
    
    # Test each agent file
    agent_files = [
        'LedgerFacts.agent',
        'LedgerPlanner.agent', 
        'Summarizer.agent',
        'progressManager.agent',
        'agentRouter.agent',
        'LedgerFactsUpdate.agent',
        'LedgerPlanupdate.agent'
    ]
    
    for agent_file in agent_files:
        filepath = os.path.join(core_path, agent_file)
        print(f"📝 Testing {agent_file}...")
        
        if not os.path.exists(filepath):
            print(f"   ❌ File not found: {filepath}")
            test_results['failed'] += 1
            test_results['details'].append(f"Missing file: {agent_file}")
            continue
            
        agent_data = load_agent_file(filepath)
        if not agent_data:
            print(f"   ❌ Could not parse {agent_file}")
            test_results['failed'] += 1
            test_results['details'].append(f"Parse error: {agent_file}")
            continue
            
        agent_name = agent_data.get('name', '')
        agent_desc = agent_data.get('description', '')
        agent_instructions = agent_data.get('instructions', '')
        
        print(f"   Agent Name: {agent_name}")
        
        # Check if agent name starts with 'Qualcomm'
        if agent_name.startswith('Qualcomm'):
            print(f"   ✅ Name properly prefixed with 'Qualcomm'")
            test_results['passed'] += 1
        else:
            print(f"   ❌ Name should start with 'Qualcomm', got: {agent_name}")
            test_results['failed'] += 1
            test_results['details'].append(f"{agent_file}: Name not Qualcomm-prefixed")
            
        # Check for semiconductor-related keywords in description and instructions
        combined_text = (agent_desc + ' ' + agent_instructions).lower()
        
        # Check for key customization indicators
        qualcomm_keywords = ['qualcomm', 'semiconductor', 'manufacturing', 'semianalysis']
        found_keywords = [kw for kw in qualcomm_keywords if kw in combined_text]
        
        if len(found_keywords) >= 2:  # Should have at least 2 key indicators
            print(f"   ✅ Contains Qualcomm customization keywords: {found_keywords}")
            test_results['passed'] += 1
        else:
            print(f"   ❌ Missing sufficient Qualcomm keywords, found: {found_keywords}")
            test_results['failed'] += 1
            test_results['details'].append(f"{agent_file}: Insufficient customization keywords")
            
        print()
    
    # Test workflow configuration
    print("📝 Testing workflow configuration...")
    workflow_path = '/home/runner/work/researchflow-agent-customized/researchflow-agent-customized/workflow/DeepResearchAgent.fdl'
    
    if os.path.exists(workflow_path):
        with open(workflow_path, 'r') as f:
            workflow_content = f.read()
            
        if 'qualcomm-deepresearch' in workflow_content:
            print("   ✅ Workflow name updated to 'qualcomm-deepresearch'")
            test_results['passed'] += 1
        else:
            print("   ❌ Workflow name not updated")
            test_results['failed'] += 1
            test_results['details'].append("Workflow name not customized")
            
        qualcomm_agents_in_workflow = workflow_content.count('Qualcomm')
        if qualcomm_agents_in_workflow >= 5:  # Should reference multiple Qualcomm agents
            print(f"   ✅ Workflow references Qualcomm agents ({qualcomm_agents_in_workflow} references)")
            test_results['passed'] += 1
        else:
            print(f"   ❌ Workflow has insufficient Qualcomm agent references ({qualcomm_agents_in_workflow})")
            test_results['failed'] += 1
            test_results['details'].append("Workflow agent references not updated")
    else:
        print("   ❌ Workflow file not found")
        test_results['failed'] += 1
        test_results['details'].append("Workflow file missing")
    
    print()
    
    # Test README customization
    print("📝 Testing README customization...")
    readme_path = '/home/runner/work/researchflow-agent-customized/researchflow-agent-customized/README.md'
    
    if os.path.exists(readme_path):
        with open(readme_path, 'r') as f:
            readme_content = f.read().lower()
            
        readme_checks = [
            ('qualcomm', 'Qualcomm branding'),
            ('semiconductor', 'Semiconductor focus'),
            ('#1c19c8', 'Qualcomm brand color'),
            ('semianalysis', 'SemiAnalysis reference'),
            ('manufacturing', 'Manufacturing industry focus')
        ]
        
        for keyword, description in readme_checks:
            if keyword in readme_content:
                print(f"   ✅ {description} found")
                test_results['passed'] += 1
            else:
                print(f"   ❌ {description} missing")
                test_results['failed'] += 1
                test_results['details'].append(f"README missing {description}")
    else:
        print("   ❌ README.md not found")
        test_results['failed'] += 1
        test_results['details'].append("README file missing")
    
    print()
    
    # Summary
    total_tests = test_results['passed'] + test_results['failed']
    success_rate = (test_results['passed'] / total_tests * 100) if total_tests > 0 else 0
    
    print("📊 Test Results Summary")
    print("=" * 50)
    print(f"✅ Passed: {test_results['passed']}")
    print(f"❌ Failed: {test_results['failed']}")
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    if test_results['details']:
        print(f"\n❌ Issues Found:")
        for detail in test_results['details']:
            print(f"   - {detail}")
    
    return test_results['failed'] == 0

if __name__ == "__main__":
    success = test_agent_customizations()
    sys.exit(0 if success else 1)