# allotted mac-book would load the very initial hostname in each session
# remember to set NOPASSWD up in sudo command
sudo hostname -fs "CP-MBP-DRD"

alias ls="ls -G"      # colorize !!
alias la="ls -Al"
alias ll="ls -l"

alias tree="tree -C"  # colorize !!

export CLICOLOR=1
export LSCOLORS=gxfxcxdxbxegedabagacad
export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;36m\]\w\[\033[00m\] \$ '
export PS1='\[\e[1;35m\][\t]\[\e[1;32m\]\u\[\e[0;1m\]@\[\e[33m\]\h\[\e[0;1m\]:\[\e[0m\] \[\e[1;36m\]\w\[\e[0m\] \$ '
