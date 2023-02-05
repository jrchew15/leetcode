def max_depth(root)
    return 0 unless root
    ldepth = 0
    rdepth = 0
    if root.left then ldepth = max_depth(root.left) end
    if root.right then rdepth = max_depth(root.right) end
    return (ldepth >= rdepth ? ldepth : rdepth) + 1
end
